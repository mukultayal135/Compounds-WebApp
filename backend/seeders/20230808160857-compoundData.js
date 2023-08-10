"use strict";
const fs = require("fs");
const csv = require("csv-parser");

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    const results = [];
    return new Promise((resolve, reject) => {
      fs.createReadStream(__dirname + "/compound.csv")
        .pipe(csv())
        .on("data", (data) => {
          results.push({
            id: data.id,
            compoundName: data.CompoundName,
            compoundDescription: data.CompounrDescription,
            imageUrl: data.strImageSource,
          });
        })
        .on("end", () => {
          queryInterface
            .bulkInsert("compounds", results)
            .then(() => {
              resolve();
            })
            .catch((error) => {
              console.error(error);
              reject(error);
            });
        });
    });
  },

  async down(queryInterface, Sequelize) {
    return queryInterface.bulkDelete("compounds", null, {});
  },
};
