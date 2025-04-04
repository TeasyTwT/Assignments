const Sequelize = require("sequelize");
const db_config = require("../Db_config");

const department = db_config.define("department", {
  id: {
    type: Sequelize.INTEGER,
    autoIncrement: true,
    allowNull: false,
    primaryKey: true,
  },
  Title: {
    type: Sequelize.STRING,
    allowNull: false,
  },
}, {timestamps: false});


module.exports = department;