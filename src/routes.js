const express = require('express')
const RecipeController = require('./controllers/RecipeController')
const IngredientController = require('./controllers/IngredientController')
const ReportsController = require('./controllers/ReportIngredientController')
const routes = express.Router()

routes.get('/recipes', RecipeController.index)
routes.post('/recipes', RecipeController.store)
routes.post('/recipes/:recipe_id/ingredients', IngredientController.store)

routes.get('/report', ReportsController.show)

module.exports = routes;