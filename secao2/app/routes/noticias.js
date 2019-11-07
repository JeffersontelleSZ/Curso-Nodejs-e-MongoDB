module.exports = function(aplication) {
  aplication.get("/noticias", function(req, res) {
    const conn = aplication.config.dbConection();
    const noticiasModel = new aplication.app.models.NoticiasDAO(conn);

    noticiasModel.getNoticias(function(error, result) {
      res.render("noticias/noticias", { noticias: result });
    });
  });
};
