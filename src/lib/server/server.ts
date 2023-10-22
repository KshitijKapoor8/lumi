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

export { sequelize, Categories, Sources, Counts }
