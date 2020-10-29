const { Model,DataTypes } = require('sequelize')

class Recipe extends Model{
  static init(sequelize) {
    super.init({
      id: {
        type:DataTypes.INTEGER,
        primaryKey: true
      },
      title: {
        type: DataTypes.STRING
      },
      author: DataTypes.STRING,
      link: DataTypes.STRING,
      category: DataTypes.STRING,
      subcategory:DataTypes.STRING,
  },{sequelize})
}
}

module.exports = Recipe;
