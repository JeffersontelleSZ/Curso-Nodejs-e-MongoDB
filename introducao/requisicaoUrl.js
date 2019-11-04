// Respondendo requisicao com base na URL
const http = require("http");

// Criando um servidor
http
  .createServer(function(req, res) {
    const categoria = req.url;

    // Criando categorias
    if (categoria == "/tecnologia") {
      res.end("Site de tecnologia");
    } else if (categoria == "/moda") {
      res.end("Site de Moda");
    } else if (categoria == "/beleza") {
      res.end("Site de beleza");
    } else {
      res.end("Pagina principal");
    }
  })
  .listen(8080);
