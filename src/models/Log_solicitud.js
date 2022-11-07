import { DataTypes } from "sequelize"
import { sequelize } from "../config/database/postgres.js"

export const Log_solicitud = sequelize.define('logs_solicitudes', {
    id: {
        type: DataTypes.INTEGER,
        autoIncrement: true,
        primaryKey: true
    },
    estado: {
        type: DataTypes.STRING,
    },
    ultimo_estado: {
        type: DataTypes.BOOLEAN,
    }
})