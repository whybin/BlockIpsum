@import 'util/Messenger.js';
@import 'util/Form.js';
@import 'src/BlockSection.js';

/**
 * Handler for generating random-length text blocks
 * @param context
 */
var onGenerate = function (context) {    // eslint-disable-line no-unused-vars
    const Sketch          = context.api();
    Messenger.Sketch      = Sketch;

    const selectedLayers  = Sketch.selectedDocument.selectedLayers;
    const SELECTION_ERROR = [
        'No shape layers were selected',
        'Please select at least one shape layer before proceeding'
    ];

    if (!selectedLayers.length) {
        Messenger.alert(...SELECTION_ERROR);
        return;
    }

    /* eslint-disable indent */
    const form = new Form({
        fontSize:    'Font size (pt)',
        lineSpacing: 'Line spacing',
        precision:   'Horizontal precision (smaller value = greater precision)'
    },
        'Generate Text Blocks',
        'Please enter numerical values. Blanks will be replaced with default values.'
    );
    /* eslint-enable indent */

    const options = form.display();
    for (const key in options) {
        options[key] = parseInt(options[key]);
    }

    let numCorrectLayers = 0;
    const filterLayers   = layer => layer.isShape;

    // Only accept Shape layers
    selectedLayers.iterateWithFilter(filterLayers, layer => {
        ++numCorrectLayers;
        BlockSection(
            Sketch,
            layer.container,
            layer.sketchObject.bezierPathWithTransforms(),
            options
        );

        layer.remove();
    });

    if (!numCorrectLayers) {
        Messenger.alert(...SELECTION_ERROR);
    }
};
