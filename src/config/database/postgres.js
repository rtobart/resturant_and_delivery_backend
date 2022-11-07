import { Sequelize } from "sequelize";
import * as dotenv from 'dotenv' // see https://github.com/motdotla/dotenv#how-do-i-use-dotenv-with-import
dotenv.config()

const chain = process.env.POSTGRES_CHAIN;

export const sequelize = new Sequelize(chain, {
  dialectOptions: {
    ssl: true,
    native:true
  }
})