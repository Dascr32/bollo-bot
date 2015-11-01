var utils = require('./utils');
var request = require('./request');

var commandList = "\n- /botinfo - About me."
+ "\n- /echo - I repeat what you say."
+ "\n- /help - A little bit of help."
+ "\n- More comming soon!";

module.exports = {
    start: function() {
        var message = "Hi! You can integrate me in 'Bollo App' in Tools/Telegram, "
        + "if you have already did that cool! Try some of my commands:"
        + commandList;
        return message;
    },

    botInfo: function() {
        var message = "Date: " + utils.formatedDate() +
        "\n------------------------------\nCreated by: Daniel Aguilar" +
        "\nVersion: " + utils.BOT_VERSION;
        return message;
    },

    help: function() {
        var message = "Here is my command list: \n"
        + commandList;
        return message;
    },

    bakeryStatus: function (callback) {
        request.getBakeries(bakeries => {
            var list = bakeries.list;
            var message;
            if (list.length != 0) {
                var message = "Here is your bakery list:";
                for (var i = 0; i < list.length; i++) {
                    message += "\n* " + list[i].name;
                    message += "\nCity: " + list[i].city;
                    message += "\nStock: " + list[i].stock;
                }
            }

            else {
                message = "Opps, you dont have registered bakeries";
            }
            callback (message);
        });
    }
};
