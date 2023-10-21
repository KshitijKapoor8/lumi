import { Sequelize } from "sequelize";
import { VITE_POSTGRES_DB, VITE_POSTGRES_PASSWORD, VITE_POSTGRES_USERNAME } from "$env/static/private";

const seq = new Sequelize(VITE_POSTGRES_DB, VITE_POSTGRES_USERNAME, VITE_POSTGRES_PASSWORD, {dialect: 'postgres'});

const testDbConnection = async () => {
    try {
      await seq.authenticate();
      console.log("Connection has been established successfully.");
    } catch (error) {
      console.error("Unable to connect to the database:", error);
    }
  };

testDbConnection();
