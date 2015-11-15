# Bollo Bot
Simple Telegram Bot used in integration with [Bollo App](https://github.com/richin13/bollo) & [Bollo Wep API]
(https://github.com/richin13/bollo_web). Used to send event notifications and get system status from the app.

<p align="center">
  <img src="http://ih1.redbubble.net/image.26841580.1366/sticker,375x360.u4.png"/>
</p>

##Command List
| Command             | Description          |
|:-------------------:|:--------------------:|
| /id                 | Your chat id         |
| /bakeries           | All your bakeries    |
| /status <bakery-id> | Bakery status        |
| /botinfo            | About the bot        |
| /echo               | I repeat what you say|
| /help               | A little bit of help.|

##Usage
First install dependencies
```javascript
npm install
```
Run the server
```javascript
node server.js
```
The server will be running at `port 3080` and can be accessed with your web browser at: 
```
localhost:3080
```
If everything went well the bot will be good to go :P

##Dependencies

| Module       | Version |
|:------------:|:-------:|
| Express      | 4.13.x  |
| Jade         | 1.11.x  |
| Moment       | 2.10.x  |
| telegram-api | 0.5.x   |

Node js Telegram API wrapper thanks to [mdibaiee](https://github.com/mdibaiee/node-telegram-api). 

##Stack
* [node js](https://nodejs.org/en/)
* [Express](http://expressjs.com/)
* [Jade](http://jade-lang.com/)
* [Heroku](https://dashboard.heroku.com/)

