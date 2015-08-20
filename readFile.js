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

//example with additional parameters to response.writeHead
var http = require('http');
var fs = require('fs');

http.createServer(function(request, response) {
  //additional params here
  response.writeHead(200, {
    'Content-Type': 'text/html'
  });

  fs.readFile('index.html', function(err, contents) {
    response.write(contents);
    response.end();
  });
}).listen(8080);