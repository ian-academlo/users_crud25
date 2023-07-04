const { Sequelize } = require("sequelize");
require("dotenv").config();

// configurando una conexión

const db = new Sequelize({
  host: process.env.DB_HOST,
  database: process.env.DB_DATABASE,
  port: process.env.DB_PORT,
  username: process.env.DB_USERNAME,
  password: process.env.DB_PASSWORD,
  dialect: "postgres",
});

// export default db;
module.exports = db;
