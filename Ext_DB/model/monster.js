const Sequelize = require("sequelize");
const db_config = require("../Db_config");

const Monster = db_config.define("monster", {
  id: {
    type: Sequelize.INTEGER,
    autoIncrement: true,
    allowNull: false,
    primaryKey: true,
  },
  name: {
    type: Sequelize.STRING,
    allowNull: false,
  },
  age: {
    type: Sequelize.INTEGER,
    allowNull: false,
  },
  department_id: {
    type: Sequelize.INTEGER,
    allowNull: false,
  },
  race: {
    type: Sequelize.STRING,
    allowNull: false,
  },
  spa: {
    type: Sequelize.FLOAT,
    allowNull: false,
  },
}, {timestamps: false});


module.exports = Monster;