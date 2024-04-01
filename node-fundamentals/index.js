// Simple HTTP server

const http = require("http");

const server = http.createServer((req, res) => {
  var h = require('https');
  var b;
  var request = h.request({'hostname': 'https://google.com'},
      function (response) {
        console.log('STATUS: ' + response.statusCode);
        console.log('HEADERS: ' + JSON.stringify(response.headers));
        response.setEncoding('utf8');
        response.on('data', function (chunk) {
          console.log('BODY: ' + chunk);
          b = chunk;
        });
      });
  request.end();

  res.writeHead(200, { "Content-Type": "text/plain" });
  res.end("Hello world! " + b);
});

const PORT = process.env.PORT || 3000;

server.listen(PORT, () => console.log("Server is running on port 3000"));
