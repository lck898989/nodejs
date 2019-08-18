let Util = {
    logger: null,
    getLogger: function() {
        return this.logger;
    },
    MODEL: {
        DEBUG: true,
        RELEASE: false
    }
};
module.exports = Util;