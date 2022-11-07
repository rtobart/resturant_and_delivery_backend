import { DataTypes } from "sequelize"
import { sequelize } from "../config/database/postgres.js"
import { Usuario } from "./Usuario.js"

export const Rol = sequelize.define('roles', {
    id: {
        type: DataTypes.INTEGER,
        autoIncrement: true,
        primaryKey: true
    },
    nombre: {
        type: DataTypes.STRING,
    },
})

Rol.hasMany(Usuario, { 
    foreignKey: 'rol_id' , 
    sourceKey: 'id' 
})
Usuario.belongsTo(Rol, { 
    foreignKey: 'rol_id' , 
    targetKey: 'id' 
})