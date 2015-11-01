// Date library
var moment = require('moment');

// Emoji library
var emoji = require('node-emoji');

var requestCount = 0;
var startTime;

module.exports = {

    BOT_VERSION: '1.1.2',
    SAD_EMOJI: emoji.get(":pensive:"),
    GRIN_EMOJI: emoji.get(":grin:"),

    formatedDate: function() {
        var date = moment(new Date());
        var formateDate = date.format("D MMM YYYY HH:mm");
        return formateDate;
    },

    getHour: function() {
        var date = moment(new Date());
        return date.format("HH");
    },

    getEchoMsg: function (message) {
        var echoComandLength = 5;
        var msg = message.substr(echoComandLength, message.length);
        return msg;
    },

    setStartTime: function(time) {
        startTime = time;
    },

    registerRequest: function () {
        requestCount++;
    },

    getRequestCount() {
        return requestCount;
    }
};
