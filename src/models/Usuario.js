import { DataTypes } from "sequelize"
import { sequelize } from "../config/database/postgres.js"
import { Direccion } from "./Direccion.js"
import { Admin_restaurant } from "./Admin_restaurant.js"
import { Reparto } from "./Reparto.js"
import { Solicitud } from "./Solicitud.js"

export const Usuario = sequelize.define('usuarios', {
    id: {
        type: DataTypes.STRING,
        primaryKey: true
    },
    correo: {
        type: DataTypes.STRING,
    },
    nombre: {
        type: DataTypes.STRING,
    },
    apellido: {
        type: DataTypes.STRING,
    },
    telefono: {
        type: DataTypes.STRING,
    },
    rut: {
        type: DataTypes.STRING,
    },
    estado: {
        type: DataTypes.BOOLEAN,
    }
})
Usuario.hasMany(Direccion, {
    foreignKey: 'usuario_id',
    sourceKey: 'id'
})
Direccion.belongsTo(Usuario, {
    foreignKey: 'usuario_id',
    targetKey: 'id'
})
Usuario.hasMany(Admin_restaurant, {
    foreignKey: 'usuario_id',
    sourceKey: 'id'
})
Admin_restaurant.belongsTo(Usuario, {
    foreignKey: 'usuario_id',
    targetKey: 'id'
})
Usuario.hasMany(Reparto, {
    foreignKey: 'usuario_id',
    sourceKey: 'id'
})
Reparto.belongsTo(Usuario, {
    foreignKey: 'usuario_id',
    targetKey: 'id'
})
Usuario.hasMany(Solicitud, {
    foreignKey: 'usuario_id',
    sourceKey: 'id'
})
Solicitud.belongsTo(Usuario, {
    foreignKey: 'usuario_id',
    targetKey: 'id'
})
