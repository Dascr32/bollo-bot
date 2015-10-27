var utils = require('./utils');

module.exports = {

    start: function() {
        var message = "Hi! You can integrate me in 'Bollo App' in Tools/Telegram, "
        + "if you have already did that cool! Try some of my commands:"
        + "\n- /botinfo - About me."
        + "\n- /echo    - I repeat what you say.";
        return message;
    },

    botInfo: function() {
        var message = "Date: " + utils.formatedDate() + "\n------------------------------\nCreated by: Daniel Aguilar\nVersion: " + utils.BOT_VERSION;
        return message;
    }
};
