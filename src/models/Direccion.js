import { DataTypes } from "sequelize"
import { sequelize } from "../config/database/postgres.js"

export const Direccion = sequelize.define('direcciones', {
    id: {
        type: DataTypes.INTEGER,
        autoIncrement: true,
        primaryKey: true
    },
    nombre: {
        type: DataTypes.STRING,
    },
    cadena: {
        type: DataTypes.STRING,
    }
})