import { Sequelize, DataTypes } from "sequelize";
import { defineSources } from "./models/Sources.model";
import { defineCategory } from "./models/Categories.model";
import { POSTGRES_DB, POSTGRES_PASSWORD, POSTGRES_USERNAME, POSTGRES_HOST } from "$env/static/private";

const sequelize = 
  new Sequelize(`postgres://${POSTGRES_USERNAME}:${POSTGRES_PASSWORD}@${POSTGRES_HOST}:5432/${POSTGRES_DB}`)

try {
  await sequelize.authenticate();
  console.log('Connection has been established successfully.');
} catch (error) {
  console.error('Unable to connect to the database:', error);
}

// define models
const Categories = defineCategory(sequelize, DataTypes)
const Sources = defineSources(sequelize, DataTypes)

await sequelize.sync({ force: true })
console.log("All models were synchronized successfully.")

export { sequelize, Categories, Sources }
