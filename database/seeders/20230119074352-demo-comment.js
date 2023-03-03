module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.bulkInsert('Comments', [
      {
        comment: 'Nice',
        post_id: 1,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        comment: 'Good',
        post_id: 1,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        comment: 'Nice',
        post_id: 2,
        createdAt: new Date(),
        updatedAt: new Date()
      }
  ]);
  },
  down: (queryInterface, Sequelize) => {
    return queryInterface.bulkDelete('Comments', null, {});
  }
};