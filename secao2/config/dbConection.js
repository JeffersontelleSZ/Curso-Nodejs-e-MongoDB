const mysql = require("mysql");

const connMySQL = function() {
  // Recebendo conexao com o banco de dados
  return mysql.createConnection({
    host: "localhost",
    user: "root",
    password: "",
    database: "portal_noticias"
  });
};

module.exports = function() {
  return connMySQL;
};
