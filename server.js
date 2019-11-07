var http = require('http');
var url = require('url');
var fs = require('fs');
var events = require('events');

var app = http.createServer(function(req,res){
    res.writeHead(200,{'Content-Type' : 'text/plain'});
    var eventEmitter =  new events.EventEmitter();

   //Assign the event handler to an event:
eventEmitter.on('scream', function(){
    console.log("caught event");
});
    res.write(req.url);
       console.log('event emitted');
    eventEmitter.emit('scream');
    var q = url.parse(req.url,true);
    //res.write("\n q.date === "+q.date);
    res.write("\n path === " +q.pathname);
    fs.readFile("demo.html",function(err,data){
     res.write(data);

    res.end();
    });

});
app.listen(9000);