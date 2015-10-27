// HTTP module
var http = require('http');

// Express modules
var express = require('express');
var router = express();

// Date library
var moment = require('moment');

// Jade views directory & engine
router.set('views', './views');
router.set('view engine', 'jade');

// Telegram api wrappers modules
var Bot = require('telegram-api');
var Message = require('telegram-api/types/Message');

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
}

// Start bot
startBot();

// Bot commands
bot.command('start', message => {
    const start = new Message().text(`Hi!
    You can integrate me in "Bollo App" in Tools/Telegram, if you have
    already did that cool! Try some of my commands:
    `);
})

bot.command('botinfo', message => {
    var answer = new Message().text('Hello, Sir').to(message.chat.id);
    bot.send(answer);
});

//===============================================================
//                        Server Settings
//===============================================================

router.get('/', function (req, res) {
    var serverStat = res.statusCode;
    var botStat = "Bot status: " + botStatus;
    var serverDate = getFormatedTime();

    res.render('index', {
        serverStatus: serverStat,
        botStatus: botStat,
        date: serverDate
    });
})

function getFormatedTime() {
    var date = moment(new Date());
    var formateDate = date.format("D MMM YYYY HH:mm");

    return formateDate;
}

// Server Port
const PORT=3080;

// Create server
var server = http.createServer(router);

// Start server
server.listen(PORT, function() {
    console.log("Bollo Bot Server listening on: http://localhost:%s", PORT);
});
