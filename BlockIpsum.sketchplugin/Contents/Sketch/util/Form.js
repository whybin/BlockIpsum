@import 'util/Messenger.js';

// eslint-disable-next-line no-unused-vars
const Form = (function () {
    /**
     * User input modal form
     * @constructs
     * @param {object} [inputs]
     * @param {string} [title]
     * @param {string} [message]
     */
    const Form = function (inputs = {}, title = '', message = '') {
        this.inputs = Object.keys(inputs);
        this._modal = COSAlertWindow.new();

        this._modal.setMessageText(title);
        this._modal.setInformativeText(message);

        for (const key in inputs) {
            this._modal.addTextLabelWithValue(inputs[key]);
            this._modal.addTextFieldWithValue('');
        }
    };

    /**
     * Populate results with user's input
     * @private
     */
    const _populateResults = function () {
        let index    = 1;
        this.results = {};

        this.inputs.forEach(identifier => {
            const value = this._modal.viewAtIndex(index);
            if (value === null) {
                return false;
            }

            this.results[identifier] = value.stringValue();
            index += 2;    // Skip text label index
        });
    };

    /**
     * @lends Form.prototype
     */
    Form.prototype = {
        /**
         * Form modal
         * @private
         * @type {COSAlertWindow}
         */
        _modal: null,

        /**
         * List of user input identifiers
         * @type {string[]}
         */
        inputs: null,

        /**
         * User input results with format: `inputIdentifier: userValue`
         * @type {object}
         */
        results: null,

        /**
         * Displays form to user and captures input
         * @returns {object} Results of form
         */
        display: function () {
            this._modal.runModal();
            _populateResults.call(this);
            return this.results;
        }
    };

    return Form;
})();
