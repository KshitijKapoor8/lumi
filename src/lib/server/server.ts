import { Sequelize, DataTypes } from "sequelize";
import { defineSources } from "./models/Sources.model";
import { defineCategories } from "./models/Categories.model";
import { defineCounts } from "./models/Counts.model";
import { POSTGRES_DB, POSTGRES_PASSWORD, POSTGRES_USERNAME, POSTGRES_HOST } from "$env/static/private";
import fs from "fs"

const sequelize = 
  new Sequelize(`postgres://${POSTGRES_USERNAME}:${POSTGRES_PASSWORD}@${POSTGRES_HOST}:5432/${POSTGRES_DB}`)

// define models
const Categories = defineCategories(sequelize, DataTypes)
const Sources = defineSources(sequelize, DataTypes)
const Counts = defineCounts(sequelize, DataTypes, Categories, Sources)

// define relations
Categories.belongsToMany(Sources, { through: Counts })
Sources.belongsToMany(Categories, { through: Counts })

await sequelize.sync({ force: false })
console.log("All models were synchronized successfully.")

// const allContents = fs.readFileSync('tac.txt', 'utf-8');

// function createCounts() {
//   if (!allContents || typeof allContents !== 'string') {
//     console.error('allContents is not defined or not a string');
//     return;
//   }

//   allContents.split(/\r?\n/).forEach((line) => {
//     if (!line) {
//       console.warn('Skipping empty line');
//       return;
//     }

//     for (let i = 1; i <= 8; i++) {
//       Counts.create({CategoryId: line.trim(), SourceId: i, Counts: 0}, (err : any) => {
//         if (err) {
//           console.error('Error creating Counts:', err);
//         }
//       });
//     }

    // for (let i = 1; i <= 7; i++) {
    //   Counts.create({CategoryId: line.trim(), SourceId: i, Counts: 0}, (err : any) => {
    //     if (err) {
    //       console.error('Error creating Counts:', err);
    //     }
    //   });
    // }
//   });
// }

// createCounts();


export { sequelize, Categories, Sources, Counts }
