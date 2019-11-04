// const dbConection = require("../../config/dbConection");

module.exports = function(app) {
  app.get("/noticias", function(req, res) {
    const conn = app.config.dbConection();

    conn.query("SELECT * FROM noticias", function(error, result) {
      res.render("noticias/noticias", { noticias: result });
    });
  });
};
