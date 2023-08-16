'use strict';
module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.createTable('Matriculas', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      status: {
        type: Sequelize.STRING
      },
      createdAt: {
        allowNull: false,
        type: Sequelize.DATE
      },
      turma_id: {
        allowNull: false,
        type: Sequelize.INTEGER,
        references: { model: 'Turmas', key: 'id'}
      },
      estudante_id: {
        allowNull: false,
        type: Sequelize.INTEGER,
        references: { model: 'Pessoas', key: 'id'}
      },
      updatedAt: {
        allowNull: false,
        type: Sequelize.DATE
      }
    });
  },
  down: (queryInterface, Sequelize) => {
    return queryInterface.dropTable('Matriculas');
  }
};