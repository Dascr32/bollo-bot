// HTTP module
var http = require('http');

// Express modules
var express = require('express');
var router = express();

// Jade views directory & engine
router.set('views', './views');
router.set('view engine', 'jade');

// Telegram api wrappers modules
var Bot = require('telegram-api');
var Message = require('telegram-api/types/Message');

var commands = require('./commands');
var utils = require('./utils');

//===============================================================
//                          Bollo Bot
//===============================================================
const TOKEN = "139597323:AAHRxnoanKaCNBs3EWZuNN6Q_g4GsOCbpRE"
var botStatus;

var bot = new Bot ({
    token: TOKEN
})

function startBot() {
    bot.start();
    botStatus = "Running";
    utils.setStartTime(utils.getHour());
}

// Start bot
startBot();

// Register request for statstics
bot.on('update', update => {
  utils.registerRequest();
});

// Bot commands
bot.command('start', message => {
    const start = new Message().text(commands.start());
    bot.send(start.to(message.chat.id));
});

bot.command('id', message => {
    const response = 'Your chat ID is: ' + message.chat.id;
    bot.send(new Message().text(response).to(message.chat.id));
});

bot.command('bakeries', message => {
    commands.bakeryList(function(msg) {
        const bakes = new Message().text(msg);
        bot.send(bakes.to(message.chat.id));
    });
});

bot.command('status <id>', message => {
    var bakeryId = message.args.id;
    commands.bakeryStatus(bakeryId, function(msg) {
        bot.send(new Message().text(msg).to(message.chat.id));
    });
});

bot.command('botinfo', message => {
    const info = new Message().text(commands.botInfo());
    bot.send(info.to(message.chat.id));
});

bot.command('echo', message => {
    const msg = new Message().text(utils.getEchoMsg(message.text));
    bot.send(msg.to(message.chat.id));
});

bot.command('help', message => {
    const msg = new Message().text(commands.help());
    bot.send(msg.to(message.chat.id));
});

bot.on('command-notfound', message => {
    if (message.chat.id > 0) {
        bot.send(new Message().text(commands.notFound()).to(message.chat.id));
    }
});

//===============================================================
//                        Server Settings
//===============================================================

router.get('/', function (req, res) {
    var serverStat = res.statusCode;
    var serverDate = utils.formatedDate();

    res.render('index', {
        botStatus: botStatus,
        date: serverDate,
        version: utils.BOT_VERSION,
        requests: utils.getRequestCount()
    });
})

// Server Port
const PORT=3080;

// Create server
var server = http.createServer(router);

// Start server
server.listen(process.env.PORT || PORT, function() {
    console.log("Bollo Bot Server listening on: http://localhost:%s", PORT);
});
