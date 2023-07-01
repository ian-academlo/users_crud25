const { Sequelize } = require("sequelize");

// configurando una conexión

const db = new Sequelize({
  host: "localhost",
  database: "users_db",
  port: 5432,
  username: "iannacus",
  password: "root",
  dialect: "postgres",
});

// export default db;
module.exports = db;
