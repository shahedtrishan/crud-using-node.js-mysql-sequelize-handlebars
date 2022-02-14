'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    /**
     * Add altering commands here.
     *
     */
      await queryInterface.createTable('users', {  id:{
        type:Sequelize.INTEGER(20),
        allowNull:false,
        primaryKey:true,
        autoIncrement:true
    },
    name:{
        type:Sequelize.STRING,
        allowNull:false,
        unique:true,
    },
    email:{
        type:Sequelize.STRING,
        allowNull:false,
        unique:true,
    },
    expertise:{
        type:Sequelize.STRING,
        allowNull:false,
        unique:false,
    },
    createdAt: Sequelize.DATE,
    updatedAt: Sequelize.DATE
   });
  
  },

  down: async (queryInterface, Sequelize) => {
    /**
     * Add reverting commands here.
     *
     */
      await queryInterface.dropTable('users');
     
  }
};
