const { Op, literal} = require('sequelize')
const Recipe = require('../database/models/Recipe')

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
  },

  async show(req, res) {
    try {
      let data = req.query
        if (Object.keys(req.query).length!==0) {
          let ingredientsArr = data.name
          console.log(' ## ==>> ingredientsArr: ', ingredientsArr)
          console.log(' ## ==>> req.query: ', data)
          ingredientsArr = JSON.stringify(ingredientsArr).split(',')
          ingredientsArr = JSON.stringify(ingredientsArr).replace(/[\[\]\\']/g, '').replace(/""/g, "'").toString().toLowerCase().replace(/"/g, "'")
          //ingredientsArr = JSON.stringify(ingredientsArr).replace(/[\[\]\\']/g, '').replace(/""/g, "'").toString().toLowerCase()
          const ingredients = await Recipe.findAll({
            attributes: ['id', 'category', 'title', 'preparation'],
            where: {
              id: {
                //[Op.eq]: literal(`SELECT recipe_id FROM ingredients WHERE NAME in ( ${ingredientsArr} )`)
                [Op.in]: literal(`(select recipe_id from ingredients group by recipe_id having sum(case when name in (${ingredientsArr}) then 1 else 0 end) = count(*) and sum(case when name not in (${ingredientsArr}) then 1 else 0 end) = 0)`)
              },
            }
          })
          return res.json(ingredients)
      } else {
        const ingredients = await Recipe.findAll({
          attributes: ['id', 'category', 'title', 'preparation'],
          
        })
        return res.json(ingredients)
      }
      }
    catch (error) {
      console.log('error - const data = req.query:', error)
    }
  }
}