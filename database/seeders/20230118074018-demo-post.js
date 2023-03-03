module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.bulkInsert('Posts', [
      {
        title: 'Sample Post One',
        description: 'Sample Description One',
        image: 'https://www.google.com/url?sa=i&url=https%3A%2F%2Fwww.pexels.com%2Fsearch%2Fcover%2F&psig=AOvVaw0arbGof5QxmEk4BGtV-Km2&ust=1674114912654000&source=images&cd=vfe&ved=0CBAQjRxqFwoTCLiUh5bS0PwCFQAAAAAdAAAAABAE',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        title: 'Sample Post Two',
        description: 'Sample Description Two',
        image: 'https://www.google.com/url?sa=i&url=https%3A%2F%2Funsplash.com%2Fs%2Fphotos%2Fcover-photo&psig=AOvVaw0arbGof5QxmEk4BGtV-Km2&ust=1674114912654000&source=images&cd=vfe&ved=0CBAQjRxqFwoTCLiUh5bS0PwCFQAAAAAdAAAAABAm',
        createdAt: new Date(),
        updatedAt: new Date()
      }
  ]);
  },
  down: (queryInterface, Sequelize) => {
    return queryInterface.bulkDelete('Posts', null, {});
  }
};