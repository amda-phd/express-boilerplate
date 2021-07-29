const { DataTypes } = require("sequelize");

const sequelize = require("@DB");

const Health = sequelize.define("health", {
  isHealthy: {
    type: DataTypes.BOOLEAN,
    allowNull: false,
    default: true,
  },
});

module.exports = Health;
