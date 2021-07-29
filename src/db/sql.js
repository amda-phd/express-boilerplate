const Sequelize = require("sequelize");

const { NODE_ENV, SQL_NAME, SQL_USER, SQL_PASSWORD, SQL_HOST, SQL_DIALECT } =
  process.env;

module.exports = new Sequelize(SQL_NAME, SQL_USER, SQL_PASSWORD, {
  host: SQL_HOST,
  dialect: SQL_DIALECT,
  logging: () => NODE_ENV === "local",
});
