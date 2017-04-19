// console.log("Hello word");

var http = require('http');
var hostname = '127.0.0.1';
var port = 7774;

// http.createServer(function(request, response){
// response.writeHead(200);
// response.write('Hello world');
// }).listen(port,hostname);

http.createServer(function (request, response) {
    // Send the HTTP header 
    // HTTP Status: 200 : OK
    // Content Type: text/plain
    response.writeHead(200, {'Content-Type': 'text/plain'});
   
    // Send the response body as "Hello World"
    response.end('Hello World\n');
 }).listen(port,hostname);

// Console will print the message
console.log('Server running at http://127.0.0.1:7774/');