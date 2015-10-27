// Date library
var moment = require('moment');

module.exports = {

    BOT_VERSION: '1.0',

    formatedDate: function() {
        var date = moment(new Date());
        var formateDate = date.format("D MMM YYYY HH:mm");
        return formateDate;
    },

    getEchoMsg: function (message) {
        var echoComandLength = 5;
        var msg = message.substr(echoComandLength, message.length);
        return msg;
    }
};
