var express = require('express')
var bodyParser = require('body-parser')
var app = express()
var request = require('request');
app.use(bodyParser.urlencoded({ extended: false }))
app.use(bodyParser.json())

var BOT_ID = "b75d1b5e0e7fe07c0803d148cd"
var BOT_NAME = "AwesomeBot"


app.use(function (req, res) {
  console.log("Received a chat message:")
  console.log(req.body)
  if (req.body.name != BOT_NAME)
  	writeMessage("This is a reply!")
})


function writeMessage(message) {
  request.post('https://api.groupme.com/v3/bots/post?bot_id=' + BOT_ID + '&text=' + message)
}


app.listen(process.env.PORT);
console.log("started listening for messages")
