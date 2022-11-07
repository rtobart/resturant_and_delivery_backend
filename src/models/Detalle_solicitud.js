import { DataTypes } from "sequelize"
import { sequelize } from "../config/database/postgres.js"

export const Detalle_solicitud = sequelize.define('detalles_solicitudes', {
    id: {
        type: DataTypes.INTEGER,
        autoIncrement: true,
        primaryKey: true
    },
    cantidad: {
        type: DataTypes.STRING,
    },
    precio_al_momento: {
        type: DataTypes.INTEGER,
    }
})