const Sequelize = require("sequelize");

const { NODE_ENV, DB_NAME, DB_USER, DB_PASSWORD, DB_HOST, DB_DIALECT } =
  process.env;

module.exports = new Sequelize(DB_NAME, DB_USER, DB_PASSWORD, {
  host: DB_HOST,
  dialect: DB_DIALECT,
  logging: NODE_ENV === "local",
});
