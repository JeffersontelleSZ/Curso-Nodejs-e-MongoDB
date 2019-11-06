module.exports = function(aplication) {
  aplication.get("/noticia", function(req, res) {
    const conn = aplication.config.dbConection();
    const noticiasModel = new aplication.app.models.noticiasModel(conn);

    noticiasModel.getNoticia(function(error, result) {
      res.render("noticias/noticia", { noticia: result });
    });
  });
};
