{"filter":false,"title":"server.js","tooltip":"/server.js","undoManager":{"mark":41,"position":41,"stack":[[{"group":"doc","deltas":[{"action":"removeLines","range":{"start":{"row":0,"column":0},"end":{"row":84,"column":0}},"nl":"\n","lines":["//","// # SimpleServer","//","// A simple chat server using Socket.IO, Express, and Async.","//","var http = require('http');","var path = require('path');","","var async = require('async');","var socketio = require('socket.io');","var express = require('express');","","//","// ## SimpleServer `SimpleServer(obj)`","//","// Creates a new instance of SimpleServer with the following options:","//  * `port` - The HTTP port to listen on. If `process.env.PORT` is set, _it overrides this value_.","//","var router = express();","var server = http.createServer(router);","var io = socketio.listen(server);","","router.use(express.static(path.resolve(__dirname, 'client')));","var messages = [];","var sockets = [];","","io.on('connection', function (socket) {","    messages.forEach(function (data) {","      socket.emit('message', data);","    });","","    sockets.push(socket);","","    socket.on('disconnect', function () {","      sockets.splice(sockets.indexOf(socket), 1);","      updateRoster();","    });","","    socket.on('message', function (msg) {","      var text = String(msg || '');","","      if (!text)","        return;","","      socket.get('name', function (err, name) {","        var data = {","          name: name,","          text: text","        };","","        broadcast('message', data);","        messages.push(data);","      });","    });","","    socket.on('identify', function (name) {","      socket.set('name', String(name || 'Anonymous'), function (err) {","        updateRoster();","      });","    });","  });","","function updateRoster() {","  async.map(","    sockets,","    function (socket, callback) {","      socket.get('name', callback);","    },","    function (err, names) {","      broadcast('roster', names);","    }","  );","}","","function broadcast(event, data) {","  sockets.forEach(function (socket) {","    socket.emit(event, data);","  });","}","","server.listen(process.env.PORT || 3000, process.env.IP || \"0.0.0.0\", function(){","  var addr = server.address();","  console.log(\"Chat server listening at\", addr.address + \":\" + addr.port);","});"]},{"action":"insertText","range":{"start":{"row":0,"column":0},"end":{"row":0,"column":32}},"text":"var express = require('express')"},{"action":"insertText","range":{"start":{"row":0,"column":32},"end":{"row":1,"column":0}},"text":"\n"},{"action":"insertLines","range":{"start":{"row":1,"column":0},"end":{"row":33,"column":0}},"lines":["var bodyParser = require('body-parser')","var app = express()","var request = require('request');","app.use(bodyParser.urlencoded({ extended: false }))","app.use(bodyParser.json())","","var BOT_ID = \"b75d1b5e0e7fe07c0803d148bc\"","var BOT_NAME = \"AwesomeBot\"","","","app.use(function (req, res) {","  console.log(\"Received a chat message:\")","  console.log(req.body)","  if (req.body.name != \"AwesomeBot\")","  \twriteMessage(req.body.name + \", this is a reply!\")","})","","","function writeMessage(message) {","  request.post(","      'https://api.groupme.com/v3/bots/post?bot_id=' + BOT_ID + '&text=' + message,","      {},","      function (error, response, body) {","          if (!error && response.statusCode == 200) {","              console.log(body)","          }","      }","  );","}","","//start server on port 3000","app.listen(process.env.PORT || 3000);"]}]}],[{"group":"doc","deltas":[{"action":"insertText","range":{"start":{"row":33,"column":0},"end":{"row":33,"column":1}},"text":"c"}]}],[{"group":"doc","deltas":[{"action":"insertText","range":{"start":{"row":33,"column":1},"end":{"row":33,"column":2}},"text":"o"}]}],[{"group":"doc","deltas":[{"action":"insertText","range":{"start":{"row":33,"column":2},"end":{"row":33,"column":3}},"text":"n"}]}],[{"group":"doc","deltas":[{"action":"insertText","range":{"start":{"row":33,"column":3},"end":{"row":33,"column":4}},"text":"s"}]}],[{"group":"doc","deltas":[{"action":"insertText","range":{"start":{"row":33,"column":4},"end":{"row":33,"column":5}},"text":"o"}]}],[{"group":"doc","deltas":[{"action":"insertText","range":{"start":{"row":33,"column":5},"end":{"row":33,"column":6}},"text":"l"}]}],[{"group":"doc","deltas":[{"action":"insertText","range":{"start":{"row":33,"column":6},"end":{"row":33,"column":7}},"text":"e"}]}],[{"group":"doc","deltas":[{"action":"insertText","range":{"start":{"row":33,"column":7},"end":{"row":33,"column":8}},"text":"."}]}],[{"group":"doc","deltas":[{"action":"insertText","range":{"start":{"row":33,"column":8},"end":{"row":33,"column":9}},"text":"l"}]}],[{"group":"doc","deltas":[{"action":"insertText","range":{"start":{"row":33,"column":9},"end":{"row":33,"column":10}},"text":"o"}]}],[{"group":"doc","deltas":[{"action":"insertText","range":{"start":{"row":33,"column":10},"end":{"row":33,"column":11}},"text":"g"}]}],[{"group":"doc","deltas":[{"action":"insertText","range":{"start":{"row":33,"column":11},"end":{"row":33,"column":13}},"text":"()"}]}],[{"group":"doc","deltas":[{"action":"insertText","range":{"start":{"row":33,"column":12},"end":{"row":33,"column":14}},"text":"\"\""}]}],[{"group":"doc","deltas":[{"action":"insertText","range":{"start":{"row":33,"column":13},"end":{"row":33,"column":14}},"text":"l"}]}],[{"group":"doc","deltas":[{"action":"insertText","range":{"start":{"row":33,"column":14},"end":{"row":33,"column":15}},"text":"i"}]}],[{"group":"doc","deltas":[{"action":"insertText","range":{"start":{"row":33,"column":15},"end":{"row":33,"column":16}},"text":"s"}]}],[{"group":"doc","deltas":[{"action":"insertText","range":{"start":{"row":33,"column":16},"end":{"row":33,"column":17}},"text":"t"}]}],[{"group":"doc","deltas":[{"action":"insertText","range":{"start":{"row":33,"column":17},"end":{"row":33,"column":18}},"text":"e"}]}],[{"group":"doc","deltas":[{"action":"insertText","range":{"start":{"row":33,"column":18},"end":{"row":33,"column":19}},"text":"n"}]}],[{"group":"doc","deltas":[{"action":"removeText","range":{"start":{"row":33,"column":13},"end":{"row":33,"column":19}},"text":"listen"}]}],[{"group":"doc","deltas":[{"action":"insertText","range":{"start":{"row":33,"column":13},"end":{"row":33,"column":14}},"text":"s"}]}],[{"group":"doc","deltas":[{"action":"insertText","range":{"start":{"row":33,"column":14},"end":{"row":33,"column":15}},"text":"t"}]}],[{"group":"doc","deltas":[{"action":"insertText","range":{"start":{"row":33,"column":15},"end":{"row":33,"column":16}},"text":"a"}]}],[{"group":"doc","deltas":[{"action":"insertText","range":{"start":{"row":33,"column":16},"end":{"row":33,"column":17}},"text":"r"}]}],[{"group":"doc","deltas":[{"action":"insertText","range":{"start":{"row":33,"column":17},"end":{"row":33,"column":18}},"text":"t"}]}],[{"group":"doc","deltas":[{"action":"insertText","range":{"start":{"row":33,"column":18},"end":{"row":33,"column":19}},"text":"e"}]}],[{"group":"doc","deltas":[{"action":"insertText","range":{"start":{"row":33,"column":19},"end":{"row":33,"column":20}},"text":"d"}]}],[{"group":"doc","deltas":[{"action":"insertText","range":{"start":{"row":33,"column":20},"end":{"row":33,"column":21}},"text":" "}]}],[{"group":"doc","deltas":[{"action":"insertText","range":{"start":{"row":33,"column":21},"end":{"row":33,"column":22}},"text":"o"}]}],[{"group":"doc","deltas":[{"action":"insertText","range":{"start":{"row":33,"column":22},"end":{"row":33,"column":23}},"text":"n"}]}],[{"group":"doc","deltas":[{"action":"insertText","range":{"start":{"row":33,"column":23},"end":{"row":33,"column":24}},"text":" "}]}],[{"group":"doc","deltas":[{"action":"insertText","range":{"start":{"row":33,"column":24},"end":{"row":33,"column":25}},"text":"p"}]}],[{"group":"doc","deltas":[{"action":"insertText","range":{"start":{"row":33,"column":25},"end":{"row":33,"column":26}},"text":"o"}]}],[{"group":"doc","deltas":[{"action":"insertText","range":{"start":{"row":33,"column":26},"end":{"row":33,"column":27}},"text":"r"}]}],[{"group":"doc","deltas":[{"action":"insertText","range":{"start":{"row":33,"column":27},"end":{"row":33,"column":28}},"text":"t"}]}],[{"group":"doc","deltas":[{"action":"insertText","range":{"start":{"row":33,"column":28},"end":{"row":33,"column":29}},"text":":"}]}],[{"group":"doc","deltas":[{"action":"insertText","range":{"start":{"row":33,"column":29},"end":{"row":33,"column":30}},"text":" "}]}],[{"group":"doc","deltas":[{"action":"insertText","range":{"start":{"row":33,"column":31},"end":{"row":33,"column":32}},"text":" "}]}],[{"group":"doc","deltas":[{"action":"insertText","range":{"start":{"row":33,"column":32},"end":{"row":33,"column":33}},"text":"+"}]}],[{"group":"doc","deltas":[{"action":"insertText","range":{"start":{"row":33,"column":33},"end":{"row":33,"column":34}},"text":" "}]}],[{"group":"doc","deltas":[{"action":"insertText","range":{"start":{"row":33,"column":34},"end":{"row":33,"column":58}},"text":"process.env.PORT || 3000"}]}]]},"ace":{"folds":[],"scrolltop":180,"scrollleft":0,"selection":{"start":{"row":33,"column":59},"end":{"row":33,"column":59},"isBackwards":false},"options":{"guessTabSize":true,"useWrapMode":false,"wrapToView":true},"firstLineState":{"row":9,"state":"no_regex","mode":"ace/mode/javascript"}},"timestamp":1414646703619,"hash":"7b65bede01d9d9187ea6fc19e85b2fbf92e90758"}