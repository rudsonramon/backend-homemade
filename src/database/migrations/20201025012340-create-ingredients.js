'use strict';
module.exports = {
  up: async (queryInterface, Sequelize) => {
    /**
     * Add altering commands here.
     *
     * Example:
     * await queryInterface.createTable('users', { id: Sequelize.INTEGER });
     */
    await queryInterface.createTable('ingredients', {
      id: {
        type: Sequelize.INTEGER,
        autoIncrement: true,
        allowNull: false,
      },
      name: {
        type: Sequelize.INTEGER,
        primaryKey: true,
        allowNull: false,
      },
      recipeId: {
        type: Sequelize.INTEGER,
      },
      quantity: {
        type: Sequelize.FLOAT,
      },
      measure: Sequelize.STRING,
      observation: Sequelize.STRING,
      created_at: {
        type: Sequelize.DATE,
        allowNull: false,
      },
      updated_at: {
        type: Sequelize.DATE,
        allowNull: false,
      }
    },
    )
  },

  down: async (queryInterface, Sequelize) => {
    /**
     * Add reverting commands here.
     *
     * Example:
     * await queryInterface.dropTable('users');
     */
    await queryInterface.dropTable('ingredients');
  }
};
