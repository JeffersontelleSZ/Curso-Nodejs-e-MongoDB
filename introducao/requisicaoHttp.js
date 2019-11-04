// Respondendo requisicao HTTP com Nodejs

const http = require("http");

// Criando um servidor
http
  .createServer(function(req, res) {
    res.end("Hello world!!");
  })
  .listen(8080);
