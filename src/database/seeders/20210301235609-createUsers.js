'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {

    await queryInterface.bulkInsert('Users', [{
      firstName: 'John',
      lastName:'burnnin',
      email:'john@gmail.com',
      age:'25',
      description:'im a normal boy'
    }], {});
  
  },

  down: async (queryInterface, Sequelize) => {
   
    await queryInterface.bulkDelete('Users', null, {});

  }
};
