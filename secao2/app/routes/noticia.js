// const dbConection = require("../../config/dbConection");

module.exports = function(app) {
  app.get("/noticia", function(req, res) {
    const conn = app.config.dbConection();

    conn.query("SELECT * FROM noticias where id_noticia = 2", function(
      error,
      result
    ) {
      res.render("noticias/noticia", { noticia: result });
    });
  });
};
