const Sequelize = require('sequelize');
const config = require('config');

const dbConfig = config.get('database');

const sequelize = new Sequelize(dbConfig.database, dbConfig.usernamse, dbConfig.password, {
  dialect: dbConfig.dialect,
  storage: dbConfig.storage,
  logging: dbConfig.logging,
});

module.exports = sequelize;
