/**
 * 
 */
var app = require('express')();
var http=require('http').Server(app);
var io=require('socket.io')(http);
var path=require('path');


app.get('/', function(req,res){
	var express=require('express');
	app.use(express.static(path.join(_dirname)));
	res.sendFile(path.join(_dirname, '../ChatApp', login.html));

});

io.on('connection',function(socket){
	socket.on('chatmsg',function(from,msg){
		io.emit('chatmsg',from, msg);
	});
	socket.on('typing',function(user){
		io.emit('typing',user);
	});
});

http.listen(3000, function(){
	console.log('listening *:3000');
});