var express = require('express')
var bodyParser = require('body-parser')
var app = express()
var request = require('request');
app.use(bodyParser.urlencoded({ extended: false }))
app.use(bodyParser.json())


//fill in these from the GroupMe dev site
var BOT_ID = ""
var BOT_NAME = ""


app.use(function (req, res) {
  console.log("Received a chat message:")
  console.log(req.body)
  if (req.body.name != BOT_NAME) //don't reply to the reply! Infinite loops!!!
  	writeMessage("This is a reply!")
})


function writeMessage(message) {
  request.post('https://api.groupme.com/v3/bots/post?bot_id=' + BOT_ID + '&text=' + message)
}


app.listen(process.env.PORT);
console.log("started listening for messages")
