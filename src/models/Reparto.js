import { DataTypes } from "sequelize"
import { sequelize } from "../config/database/postgres.js"

export const Reparto = sequelize.define('repartos', {
    id: {
        type: DataTypes.INTEGER,
        autoIncrement: true,
        primaryKey: true
    },
    estado: {
        type: DataTypes.BOOLEAN,
    }
})