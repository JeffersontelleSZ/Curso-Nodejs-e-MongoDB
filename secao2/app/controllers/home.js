module.exports.index = function(aplication, req, res) {
  const conn = aplication.config.dbConection();
  const noticiasModel = new aplication.app.models.NoticiasDAO(conn);

  noticiasModel.getUltimasNoticias(function(error, result) {
    res.render("home/index", { noticias: result });
  });
};
