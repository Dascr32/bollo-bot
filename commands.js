var utils = require('./utils');
var request = require('./request');

var commandList = "\n- /id - Your chat id."
+ "\n- /bakeries - All your bakeries."
+ "\n- /status <bakery-id> - Get your bakery status."
+ "\n- /botinfo - About me."
+ "\n- /echo - I repeat what you say."
+ "\n- /help - A little bit of help."
+ "\n- More comming soon!";

module.exports = {
    start: function() {
        var message = "Hi! You can integrate me in 'Bollo App' in Tools/Telegram, "
        + "use the command /id to get your ID and integrate me with 'Bollo App',"
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

    notFound: function () {
        const message = 'What did you say? I cant understand you '
        + utils.SAD_EMOJI + ' use /help for more information.';
        return message;
    },

    bakeryList: function (callback) {
        request.getBakeries(bakeries => {
            var list = bakeries.list;
            var message;
            if (list.length != 0) {
                var message = "Here is your bakery list:";
                for (var i = 0; i < list.length; i++) {
                    message += "\n* " + list[i].name + " (" + list[i].city + ")";
                    message += "\nId: " + list[i].id;
                    message += "\nStock: " + list[i].stock;
                }
            }
            else {
                message = "Opps, you dont have registered bakeries";
            }
            callback (message);
        });
    },

    bakeryStatus: function (id, callback) {
        var message;
        request.getStatus(id, bakeryStatus => {
            if (bakeryStatus.code != 1) {
                message = "* Bakery id #" + id +
                "\n- Status: " + bakeryStatus.status + "\n- Progress: " +
                bakeryStatus.progress + "%";
            }
            else {
                message = "There is no bakery with that id. " + utils.GRIN_EMOJI;
            }
            callback (message);
        });
    }
};
