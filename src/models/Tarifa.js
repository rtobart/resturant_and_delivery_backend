import { DataTypes } from "sequelize"
import { sequelize } from "../config/database/postgres.js"
import { Reparto } from "./Reparto.js"

export const Tarifa = sequelize.define('tarifas', {
    id: {
        type: DataTypes.INTEGER,
        autoIncrement: true,
        primaryKey: true
    },
    descripcion: {
        type: DataTypes.STRING,
    },
    precio: {
        type: DataTypes.INTEGER,
    }
})

Tarifa.hasMany(Reparto, {
    foreignKey: 'tarifa_id',
    sourceKey: 'id'
})
Reparto.belongsTo(Tarifa, {
    foreignKey: 'tarifa_id',
    targetKey: 'id'
})