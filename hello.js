// node.js Hello World

// syntax to require modules
var http = require('http');


// createServer has 2 parameters
// callback with 'request' & 'response'
http.createServer(function (request, response) { //request event here

  // Status code in the header for response
  response.writeHead(200);

  // Response body
  response.write("Hello, I\'m waiting for dog.");

  
  //setTimeout to simulate a longer running process
  //Timeout event is big in node.js
  setTimeout(function(){
     response.write("My dog arrived, waiting is done.");

     // end the response, close the connection
    response.end();
  }, 5000);


  // end the response, close the connection
  //response.end();

// listen for connections on this port
// (port 8080)
}).listen(8080);

console.log('listening on port 8080');

//to run, in terminal, enter:
// node hello.js

//to see the written response, enter: 
// curl http://localhost:8080

//can also go to localhost:8080 in the browser to get the same result

//non-blocking function
var fs = require('fs');

var contents = fs.readFile('index.html', function(err, contents){
console.log(contents);

});

//writes something and reads index.html at the same time
var http = require('http');
var fs = require('fs');

http.createServer(function(request, response) {
  response.writeHead(200);
  fs.readFile('index.html', function(error, data) {
  response.write(data);
    response.end(); 
  });

}).listen(8080);
