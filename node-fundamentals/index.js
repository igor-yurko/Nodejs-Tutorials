// Simple HTTP server

const http = require("http");

const server = http.createServer((req, res) => {
  var http = require('http');
  var b;
  var request = http.request({'hostname': 'https://smartpass.doo.dev/oauth2/oauth/check_token?token=319838fc-b137-45f4-8358-b26a3ad2e273',
        'auth': 'ui:secret'
      },
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
