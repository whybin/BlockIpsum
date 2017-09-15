@import 'config.js'
@import 'src/BlockLine.js'

// eslint-disable-next-line no-unused-vars
const BlockSection = (function () {
    /**
     * Handles entire section of text blocks, one per selected layer
     * @exports BlockSection
     * @todo Use simpler algorithm if shape is a rectangle
     * @param {Application}  Sketch    - Current contextual instance
     * @param {Group}        container - Group of current layer
     * @param {NSBezierPath} bezierPath
     * @param {object}       [options]
     *
     * @param {number}       [options.fontSize=16]
     * @param {number}       [options.precision] - Margin of error for horizontal
     * spacing
     * @param {number}       [options.lineSpacing]
     */
    const BlockSection = function (Sketch, container, bezierPath, options = {}) {
        // Configurable spacing properties
        options.fontSize    = options.fontSize || Config.defaults.fontSize;
        const midFontHeight = options.fontSize / 2;
        const checkEvery    = options.precision
            || Config.ratios.precision * options.fontSize;
        options.lineSpacing = options.lineSpacing
            || Config.ratios.lineSpacing * options.fontSize;

        const { width, height } = bezierPath.bounds().size;
        // eslint-disable-next-line prefer-const
        let   { x, y }          = bezierPath.bounds().origin;

        // Create group to contain text block shapes
        const group = container.newGroup();
        group.name  = Config.defaults.groupName;

        const x2    = x + width;
        const y2    = y + height;

        let endpoints     = [];    // List of text block boundaries
        let containsPoint = false;
        y += midFontHeight;

        while (y <= y2) {
            for (let xTest = x; xTest <= x2; xTest += checkEvery) {
                // Find rough boundaries for text space per horizontal chunk
                // containsPoint returns integers for boolean values
                if (
                    bezierPath.containsPoint({ x: xTest, y: y }) != containsPoint
                ) {
                    containsPoint = !containsPoint;
                    endpoints.push(xTest);
                }
            }

            if (endpoints.length % 2) {
                endpoints.push(x2);
            }

            // Create text block shape
            BlockLine(Sketch, group, endpoints, y - midFontHeight, options);

            y += options.lineSpacing;
            containsPoint = false;
            endpoints     = [];
        }

        group.adjustToFit();
    };

    return BlockSection;
})();
