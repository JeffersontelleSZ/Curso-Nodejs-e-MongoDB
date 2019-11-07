function NoticiasDAO(conn) {
  this._conn = conn;
}

NoticiasDAO.prototype.getNoticias = function(callback) {
  this._conn.query("SELECT * FROM noticias", callback);
};

NoticiasDAO.prototype.getNoticia = function(callback) {
  this._conn.query("SELECT * FROM noticias where id_noticias = 2", callback);
};

NoticiasDAO.prototype.salvarNoticia = function(noticia, callback) {
  this._conn.query("insert into noticias set ?", noticia, callback);
};

module.exports = function() {
  return NoticiasDAO;
};
