const mysql = require("mysql");

const connMySQL = function() {
  console.log("Conexao com o bd estabelicida");

  // Recebendo conexao com o banco de dados
  return mysql.createConnection({
    host: "localhost",
    user: "root",
    password: "",
    database: "portal_noticias"
  });
};

module.exports = function() {
  console.log("O autoload carregou o modulo");
  return connMySQL;
};
