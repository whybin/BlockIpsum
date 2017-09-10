@import 'util/Messenger.js';

/**
 * Generate text block shapes along the y axis given x endpoints
 * @exports BlockLine
 *
 * @param {Application}  Sketch    - Current contextual instance
 * @param {Group}        container - Group of current layer
 * @param {NSBezierPath} bezierPath
 * @param {object}       [options]
 * @param {number}       [options.fontSize=16]
 */
// eslint-disable-next-line no-unused-vars
const BlockLine = function (Sketch, container, endpoints, y, options) {
    if (!options.fontSize || options.fontSize < 0) {
        Messenger.alert('Invalid block height');
        return;
    }

    const capHeight = Math.round(options.fontSize * 3 / 4);

    while (endpoints.length) {
        const x = endpoints.shift();
        const w = endpoints.shift() - x;
        const r = new Sketch.Rectangle(x, y, w || options.fontSize, capHeight);

        // Explicitly setting borders as an empty array overrides defaults
        container.newShape({ frame: r, borders: [] });
    }
};
