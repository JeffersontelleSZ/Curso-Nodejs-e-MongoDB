module.exports.noticias = function(aplication, req, res) {
  const conn = aplication.config.dbConection();
    const noticiasModel = new aplication.app.models.NoticiasDAO(conn);

    noticiasModel.getNoticias(function(error, result) {
      res.render("noticias/noticias", { noticias: result });
    });
}

module.exports.noticia = function(aplication, req, res) {
  const conn = aplication.config.dbConection();
    const noticiasModel = new aplication.app.models.NoticiasDAO(conn);

    noticiasModel.getNoticia(function(error, result) {
      res.render("noticias/noticia", { noticia: result });
    });
}