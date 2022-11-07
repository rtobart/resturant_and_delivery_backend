import { DataTypes } from "sequelize"
import { sequelize } from "../config/database/postgres.js"

export const Admin_restaurant = sequelize.define('admins_restaurant', {
    id: {
        type: DataTypes.INTEGER,
        autoIncrement: true,
        primaryKey: true
    }
})