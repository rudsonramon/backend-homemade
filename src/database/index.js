const Sequelize = require('sequelize')
const dbConfig = require('../config/database')
const Recipe = require('../database/models/Recipe')
const Ingredient = require('../database/models/Ingredient')
const connection = new Sequelize(dbConfig)

Recipe.init(connection)
Ingredient.init(connection)

module.exports = connection