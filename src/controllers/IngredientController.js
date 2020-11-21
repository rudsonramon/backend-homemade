const { Op } = require('sequelize')
const Recipe = require('../database/models/Recipe')
const Ingredient = require('../database/models/Ingredient');

module.exports = {
  async store(req, res) {
    const { recipe_id } = req.params;
    const { name, quantity, measure, observation } = req.body;
    
    const recipe = await Recipe.findByPk(recipe_id);
    
    if (!recipe) {
      return res.status(400).json({error:'Receita não encontrada'})
    }
    
    const ingredient = await Ingredient.create({
      recipe_id,
      name,
      quantity,
      measure,
      observation,
    })
    return res.json(ingredient)
  },

  async show(req, res) {
    try {
    const { recipe_id } = req.params;
    
    const recipe = await Recipe.findByPk(recipe_id);
    
    if (!recipe) {
      return res.status(400).json({error:'Receita não encontrada'})
    }
      const ingredient = await Ingredient.findAll({
        attributes: ['name', 'quantity', 'measure', 'observation'],
        where: {
          recipe_id: recipe_id,
          name:{[Op.ne]:null}
        }
    })
      return res.json(ingredient)
    }
    catch (error) {
      console.log('error - const data = req.query:', error)
    }
  },

  async getAllIngredients(req, res) {
    const ingredients = await Ingredient.findAll({
      attributes: ['id', 'name'],
    });
    
    if (!ingredients) {
      return res.status(400).json({error:'Ingredientees não encontrados'})
    }

    return res.json(ingredients)
  }
}