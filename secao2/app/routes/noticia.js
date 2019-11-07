module.exports = function(aplication) {
  aplication.get("/noticia", function(req, res) {
    const conn = aplication.config.dbConection();
    const noticiasModel = new aplication.app.models.NoticiasDAO(conn);

    noticiasModel.getNoticia(function(error, result) {
      res.render("noticias/noticia", { noticia: result });
    });
  });
};
