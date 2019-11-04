module.exports = function(aplication) {
  aplication.get("/noticias", function(req, res) {
    const conn = aplication.config.dbConection();
    const noticiasModel = aplication.app.models.noticiasModel;

    noticiasModel.getNoticias(conn, function(error, result) {
      res.render("noticias/noticias", { noticias: result });
    });
  });
};
