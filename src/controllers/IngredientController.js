const Recipe = require('../database/models/Recipe')
const Ingredient = require('../database/models/Ingredient')

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
  }
}