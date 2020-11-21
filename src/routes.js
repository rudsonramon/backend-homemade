const express = require('express')
const RecipeController = require('./controllers/RecipeController')
const IngredientController = require('./controllers/IngredientController')
//const ReportsController = require('./controllers/ReportIngredientController')
const routes = express.Router()

routes.get('/recipes', RecipeController.index)
routes.post('/recipes', RecipeController.store)
routes.get('/recipes/:recipe_id/ingredients', IngredientController.show)
routes.post('/recipes/:recipe_id/ingredients', IngredientController.store)

routes.get('/report', RecipeController.show)
routes.get('/ingredients', IngredientController.getAllIngredients)

module.exports = routes;