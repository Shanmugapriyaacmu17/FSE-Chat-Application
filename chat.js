var socket=io();
function submitfn(){
	var from=$('#user').val();
	var message=$('#msg').val();
	if(message!=''){
		socket.emit('chatmsg', from, message);
	}
	$('#msg').val('').focus();
	return false;
}

function post(){
	document.getElementById("messages").innerHTML=console.log("msg");
	document.write("messages");
}

function notifyTyping(){
	var user=$('user').val();
	socket.emit('typing',user);
}

socket.on('chatmsg',function(from,msg){
	var me=$('user').val();
	var color=(from==me)?'green':'#009afd';
	var from=(from==me)?'Me':from;
	$('msglist').append('<li><b style="color:'+color+'">'+from+'</b>:'+msg+'<li>');
	
});


socket.on('typing', function(user){
	var me=$('#user').val();
	if(user!=me){
		$('typing').text(user + 'is typing...');
	}
	setTimeout(function(){$('typing').text('');},10000);;
});

$(document).ready(function(){
	var name=makeid();
	$('user').val(name);
	socket.emit('chatmsg','System','<b>' + name + '</b has joined the Chat Room')
});
 
function makeid(){
	var text="";
	var posssible="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789";
	
	for (var i=0; i<5; i++){
		text +=possible.chatAt(Math.floor(Math.random()*possible.length));
	}
	return text;
		
}