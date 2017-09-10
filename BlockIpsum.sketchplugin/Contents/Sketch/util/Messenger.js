/**
 * @exports Messenger
 * @param {Application} Sketch
 */
const Messenger = { // eslint-disable-line no-unused-vars
    Sketch: null,

    /**
     * Sends Sketch alert
     * @param {string|string[]} title - Alert title or array of params to spread
     * @param {...string}       message
     */
    alert: function (title, ...message) {
        if (!this.Sketch) {
            return;
        }

        if (title instanceof Array) {
            [title, ...message] = title;
        }

        message = message.join(' ');
        this.Sketch.alert(message, title);
    }
};
