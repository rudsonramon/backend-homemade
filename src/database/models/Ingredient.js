const { Model,DataTypes } = require('sequelize')

class Ingredient extends Model{
  static init(sequelize) {
    super.init({
      id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true,
        allowNull: false,
      },
      name: {
        type: DataTypes.STRING,
      },
      recipe_id: DataTypes.INTEGER,
      quantity: DataTypes.FLOAT,
      measure: DataTypes.STRING,
      observation:DataTypes.STRING,
  },{sequelize})
  }
  static associate(models) {
    this.belongsTo(models.Recipe, {foreignKey:'id', as: 'recipe'})
  }
}

module.exports = Ingredient;
