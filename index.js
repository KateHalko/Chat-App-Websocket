var express = require('express');
var socket= require('socket.io');


//app setup

var app =express();
var server=app.listen(3000,function(){
    
    console.log('work')
});

//static files

app.use(express.static('public'));
 
//socket set

var io = socket(server);

io.on('connection', (socket) => {

    console.log('made socket connection', socket.id);

    // Name chat event
    socket.on('chat', function(data){
        // console.log(data);
        io.sockets.emit('chat', data);
    });

    //  typing event
    socket.on('typing', function(data){
        socket.broadcast.emit('typing', data);
    });

});


