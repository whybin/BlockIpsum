@import 'src/BlockLine.js'

// eslint-disable-next-line no-unused-vars
const BlockSection = (function () {
    const DEFAULT_BLOCK_HEIGHT = 16;

    /**
     * Handles entire section of text blocks, one per selected layer
     * @exports BlockSection
     * @param {Application}  Sketch    - Current contextual instance
     * @param {Group}        container - Group of current layer
     * @param {NSBezierPath} bezierPath
     * @param {object}       [options]
     *
     * @param {number}       [options.blockHeight=16]
     * @param {number}       [options.accuracy] - Margin of error for horizontal
     * spacing
     * @param {number}       [options.lineSpacing]
     */
    const BlockSection = function (Sketch, container, bezierPath, options = {}) {
        // Configurable spacing properties
        options.blockHeight     = !options.blockHeight || options.blockHeight < 0
            ? DEFAULT_BLOCK_HEIGHT
            : options.blockHeight;
        const midBlockHeight    = options.blockHeight / 2;
        const checkEvery        = options.accuracy || midBlockHeight;
        options.lineSpacing     = options.lineSpacing
            || options.blockHeight + midBlockHeight;

        const { width, height } = bezierPath.bounds().size;
        // eslint-disable-next-line prefer-const
        let   { x, y }          = bezierPath.bounds().origin;

        // Create group to contain text block shapes
        const group = container.newGroup();
        group.name  = 'Text Blocks';

        const x2    = x + width;
        const y2    = y + height;

        let endpoints     = [];    // List of text block boundaries
        let containsPoint = false;
        y += midBlockHeight;

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
            BlockLine(Sketch, group, endpoints, y - midBlockHeight, options);

            y += options.lineSpacing;
            containsPoint = false;
            endpoints     = [];
        }

        group.adjustToFit();
    };

    return BlockSection;
})();
