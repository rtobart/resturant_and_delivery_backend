import { DataTypes } from "sequelize"
import { sequelize } from "../config/database/postgres.js"
import { Solicitud } from "./Solicitud.js"

export const Tipo_solicitud = sequelize.define('tipos_solicitud', {
    id: {
        type: DataTypes.INTEGER,
        autoIncrement: true,
        primaryKey: true
    },
    descripcion: {
        type: DataTypes.STRING,
    }
})
 
Tipo_solicitud.hasMany(Solicitud, {
    foreignKey: 'tipo_solicitud_id',
    sourceKey: 'id'
})
Solicitud.belongsTo(Tipo_solicitud, {
    foreignKey: 'tipo_solicitud_id',
    targetKey: 'id'
})