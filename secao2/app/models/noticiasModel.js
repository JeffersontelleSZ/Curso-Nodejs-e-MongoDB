module.exports = function() {
  this.getNoticias = function(conn, callback) {
    conn.query("SELECT * FROM noticias", callback);
  };

  this.getNoticia = function(conn, callback) {
    conn.query("SELECT * FROM noticias where id_noticia = 2", callback);
  };

  return this;
};
