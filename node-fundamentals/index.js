// Simple HTTP server

const http = require("http");

const server = http.createServer((req, res) => {
    var username = "ui";
    var password = "secret";
    var auth = "Basic " + new Buffer(username + ":" + password).toString("base64");
    var request = require('request');
    var url = "https://auth.smart-pass.com/oauth2/oauth/check_token?token=67e326a6-19bb-47b1-8a41-c2c22cfa912b";
    var a = "no";
    request.post( {
        url : url,
        headers : {
            "Authorization" : auth
        }
    }, function(error, response, body) {
        console.log('body : ', body);
        a = body;
    } );

  res.writeHead(200, { "Content-Type": "text/plain" });
  res.end("Hello world! " + a);
});

const PORT = process.env.PORT || 3000;

server.listen(PORT, () => console.log("Server is running on port 3000"));
