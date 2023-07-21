/* eslint-disable linebreak-style */
/* eslint-disable no-unused-vars */
'use strict';

const fs = require('fs');
const path = require('path');

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {
    // file is one level up 
    const filePath = path.join(__dirname, '..', 'compounds.json');
    const { compounds } = JSON.parse(fs.readFileSync(filePath, 'utf-8'));
    
    const compoundData = compounds.map(compound => ({
      compoundName: compound.compoundName,
      compoundImage: compound.compoundImage,
      compoundDescription: compound.compoundDescription,
      createdAt: new Date(),
      updatedAt: new Date()
    }));

    await queryInterface.bulkInsert('Compounds', compoundData, {});
  },

  async down (queryInterface, Sequelize) {
    await queryInterface.bulkDelete('Compounds', null, {});
  }
};
