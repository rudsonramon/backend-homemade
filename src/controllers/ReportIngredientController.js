const { Op, literal } = require('sequelize')
const Recipe = require('../database/models/Recipe')

module.exports = {
  async show(req, res) {
    //const { name } = req.body;
    const data = req.body;
    const whereClause = data.map((item) => {
      return  "'" + item.name + "'"
    })
    const ingredients = await Recipe.findAll({
      attributes: ['id', 'category', 'title'],
      where: {
        id: {
          [Op.all]:literal(`SELECT recipe_id FROM ingredients WHERE NAME in ( ${whereClause} )`)
        }
      }
    })
    return res.json(ingredients) 
  }
}