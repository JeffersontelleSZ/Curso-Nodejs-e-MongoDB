module.exports = function(aplication) {
  aplication.get("/formulario_inclusao_noticia", function(req, res) {
    res.render("admin/form_add_noticia");
  });

  aplication.post("/noticias/salvar", function(req, res) {
    const noticia = req.body;

    // Conexao
    const conn = aplication.config.dbConection();
    const noticiasModel = aplication.app.models.noticiasModel;

    noticiasModel.salvarNoticia(noticia, conn, function(error, result) {
      res.redirect("/noticias");
    });

    // Model

    // Save
  });
};
