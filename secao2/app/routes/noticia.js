// const dbConection = require("../../config/dbConection");

module.exports = function(aplication) {
  aplication.get("/noticia", function(req, res) {
    const conn = aplication.config.dbConection();
    const noticiasModel = aplication.app.models.noticiasModel;

    noticiasModel.getNoticia(conn, function(error, result) {
      res.render("noticias/noticia", { noticia: result });
    });
  });
};
