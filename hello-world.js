var http = require("http");
var expresss = require('express');

http.createServer(function (request, response) {
	// Send the HTTP header
	// HTTP Status: 200: OK
	// Content Type: text/plain
	response.writeHead(200, {'Content-Type': 'text/plain'});
	response.end('Hello Everyone!\n');
}).listen(8081);

console.log("Hello World!");
console.log('Server running at http://127.0.0.1:8081/');
