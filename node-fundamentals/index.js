// Simple HTTP server

const http = require("http");

const server = http.createServer((req, res) => {
    var username = "ui";
    var password = "secret";
    var auth = "Basic " + new Buffer(username + ":" + password).toString("base64");
    var request = require('request');
    var url = "https://smartpass.doo.dev/oauth2/oauth/check_token?token=319838fc-b137-45f4-8358-b26a3ad2e273";
    var a = "no";
    request.post( {
        url : url,
        headers : {
            "Authorization" : auth
        }
    }, function(error, response, body) {
        console.log('body : ', body);
        console.log('error : ', error);
        console.log('res : ', response);
    } );

  res.writeHead(200, { "Content-Type": "text/plain" });
  res.end("Hello world!");
});

const PORT = process.env.PORT || 3000;

server.listen(PORT, () => console.log("Server is running on port 3000"));
