'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.bulkInsert('Carros', [
      {
        placa: 'AAA1111',
        ano: 2020,
        modelo: 'Versa SL',
        ativo: true,
        marca: 'Nissan',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        placa: 'BBB2222',
        ano: 2020,
        modelo: 'Prisma',
        ativo: true,
        marca: 'Chevrolet',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        placa: 'CCC3333',
        ano: 2020,
        modelo: 'Fusca',
        ativo: true,
        marca: 'Volkswagen',
        createdAt: new Date(),
        updatedAt: new Date()
      },{
        placa: 'DDD4444',
        ano: 2020,
        modelo: 'Uno',
        ativo: true,
        marca: 'Fiat',
        createdAt: new Date(),
        updatedAt: new Date()
      }

    ])
  },
  async down(queryInterface, Sequelize) {
    await queryInterface.bulkDelete('Carros', null, {});
  }
};
