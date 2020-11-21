const { Op, literal } = require('sequelize')
const Recipe = require('../database/models/Recipe')

module.exports = {
  async show(req, res) {
    try {
      let data = req.query
        if (Object.keys(req.query).length!==0) {
          let ingredientsArr = data.title
          ingredientsArr = JSON.stringify(ingredientsArr).split(',')
          ingredientsArr = JSON.stringify(ingredientsArr).replace(/[\[\]\\']/g, '').replace(/""/g, "'").toString().toLowerCase()
          const ingredients = await Recipe.findAll({
            attributes: ['id', 'category', 'title', 'preparation'],
            where: {
              id: {
                [Op.all]: literal(`SELECT recipe_id FROM ingredients WHERE NAME in ( ${ingredientsArr} )`)
              },
            }
          })
          return res.json(ingredients)
      } else {
        const ingredients = await Recipe.findAll({
          attributes: ['id', 'category', 'title'],
          
        })
        return res.json(ingredients)
      }
      }
    catch (error) {
      console.log('error - const data = req.query:', error)
    }
  },
}