const Recipe = require('../database/models/Recipe')
const Ingredient = require('../database/models/Ingredient')

module.exports = {
  async index(req, res) {
    const recipes = await Recipe.findAll()
    return res.json(recipes)
  },
  async store(req, res) {
    const { title, author, link, category, subcategory } = req.body
    const recipe = await Recipe.create({ title, author, link, category, subcategory })
//    const ingredient = await Ingredient.create({name, quantity, measure, observation})
    return res.json(recipe)
  }
}