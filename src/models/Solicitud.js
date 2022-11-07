import { DataTypes } from "sequelize"
import { sequelize } from "../config/database/postgres.js"
import { Detalle_solicitud } from "./Detalle_solicitud.js"
import { Log_solicitud } from "./Log_solicitud.js"
import { Reparto } from "./Reparto.js"

export const Solicitud = sequelize.define('solicitudes', {
    id: {
        type: DataTypes.STRING,
        primaryKey: true
    },
    fecha: {
        type: DataTypes.DATE,
    },
    direccion: {
        type: DataTypes.STRING,
    },
    estado: {
        type: DataTypes.STRING,
    },
    formato_pago: {
        type: DataTypes.STRING,
    },
    comentario: {
        type: DataTypes.STRING,
    }
})

Solicitud.hasMany(Detalle_solicitud, {
    foreignKey: 'soliciud_id',
    sourceKey: 'id'
})
Detalle_solicitud.belongsTo(Solicitud, {
    foreignKey: 'soliciud_id',
    targetKey: 'id'
})
Solicitud.hasMany(Log_solicitud, {
    foreignKey: 'soliciud_id',
    sourceKey: 'id'
})
Log_solicitud.belongsTo(Solicitud, {
    foreignKey: 'soliciud_id',
    targetKey: 'id'
})
Solicitud.hasMany(Reparto, {
    foreignKey: 'soliciud_id',
    sourceKey: 'id'
})
Reparto.belongsTo(Solicitud, {
    foreignKey: 'soliciud_id',
    targetKey: 'id'
})
