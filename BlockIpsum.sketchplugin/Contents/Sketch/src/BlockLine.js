@import 'util/Messenger.js';

/**
 * Generate text block shapes along the y axis given x endpoints
 * @exports BlockLine
 *
 * @param {Application}  Sketch    - Current contextual instance
 * @param {Group}        container - Group of current layer
 * @param {NSBezierPath} bezierPath
 * @param {object}       [options]
 * @param {number}       [options.blockHeight=16]
 */
const BlockLine = function (Sketch, container, endpoints, y, options) {
    if (!options.blockHeight || options.blockHeight < 0) {
        Messenger.alert('Invalid block height');
        return;
    }

    while (endpoints.length) {
        let x = endpoints.shift();
        let w = endpoints.shift() - x;
        let r = new Sketch.Rectangle(
            x, y, w || options.blockHeight, options.blockHeight
        );

        // Explicitly setting borders as an empty array overrides defaults
        container.newShape({ frame: r, borders: [] });
    }
};
