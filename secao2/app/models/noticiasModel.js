function Noticias(conn) {
  this._conn = conn;
}

Noticias.prototype.getNoticias = function(callback) {
  this._conn.query("SELECT * FROM noticias", callback);
};

Noticias.prototype.getNoticia = function(callback) {
  this._conn.query("SELECT * FROM noticias where id_noticias = 2", callback);
};

Noticias.prototype.salvarNoticia = function(noticia, callback) {
  this._conn.query("insert into noticias set ?", noticia, callback);
};

module.exports = function() {
  return Noticias;
};
