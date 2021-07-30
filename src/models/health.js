const { DataTypes } = require("sequelize");

const sequelize = require("@sql");

const Health = sequelize.define("health", {
  isHealthy: {
    type: DataTypes.BOOLEAN,
    allowNull: false,
    default: true,
  },
});

module.exports = Health;
