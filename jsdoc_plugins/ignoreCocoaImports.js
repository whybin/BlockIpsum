if (exports !== undefined || typeof exports === 'object') {
    exports.handlers = {
        beforeParse: function (e) {
            e.source = e.source.replace(/(^|\n)\s*@import .+/g, '');
        }
    };
}
