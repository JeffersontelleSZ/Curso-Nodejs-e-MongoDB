module.exports = function(aplication) {
  aplication.get("/formulario_inclusao_noticia", function(req, res) {
    res.render("admin/form_add_noticia");
  });

  aplication.post("/noticias/salvar", function(req, res) {
    const noticia = req.body;
    console.log(noticia);

    // Validar Formulario
    req.assert("titulo", "Titulo é obrigatorio").notEmpty();
    req.assert("resumo", "O resumo e obrigatorio").notEmpty();
    req
      .assert("resumo", "O resumo deve ter entre 10 e 100 caract")
      .len(10, 100);
    req.assert("autor", "O autor é obrigatorio").notEmpty();
    req
      .assert("data_noticia", "Data é obrigatorio")
      .notEmpty()
      .isDate({ format: "YYYY-MM-DD" });
    req.assert("noticia", "Noticia é obrigatorio").notEmpty();

    const errors = req.validationErrors();
    if (errors) {
      res.render("admin/form_add_noticia");
      return;
    }

    // Conexao
    const conn = aplication.config.dbConection();
    const noticiasModel = new aplication.app.models.NoticiasDAO(conn);

    noticiasModel.salvarNoticia(noticia, function(error, result) {
      res.redirect("/noticias");
    });
  });
};
