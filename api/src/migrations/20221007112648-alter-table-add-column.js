'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {
    await queryInterface.addColumn('Carros', 'deletedAt', {
      allowNull: true,
      type: Sequelize.DATE
    })
  },

  async down (queryInterface, Sequelize) {
    await queryInterface.removeColumn('Carros', 'deletedAt');
  }
};
