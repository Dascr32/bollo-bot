var utils = require('./utils');

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
    }
};
