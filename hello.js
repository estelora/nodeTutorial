// node.js Hello World

// syntax to require modules
var http = require('http');


// createServer has 2 parameters
// callback with 'request' & 'response'
http.createServer(function (request, response) {
  
  // Status code in the header for response
  response.writeHead(200);

  // Response body
  response.write("Hello, I\'m waiting for dog.");

  // end the response, close the connection
  response.end();

// listen for connections on this port
// (port 8080)
}).listen(8080);

console.log('listening on port 8080');

//to run, in terminal, enter:
// node hello.js

//to see the written response, enter: 
// curl http://localhost:8080