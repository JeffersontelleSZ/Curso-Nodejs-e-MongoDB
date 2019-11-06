module.exports = function(aplication) {
  aplication.get("/formulario_inclusao_noticia", function(req, res) {
    res.render("admin/form_add_noticia");
  });

  aplication.post("/noticias/salvar", function(req, res) {
    const noticia = req.body;

    // Conexao
    const conn = aplication.config.dbConection();
    const noticiasModel = new aplication.app.models.noticiasModel(conn);

    noticiasModel.salvarNoticia(noticia, function(error, result) {
      res.redirect("/noticias");
    });
  });
};
