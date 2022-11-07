import { DataTypes } from "sequelize"
import { sequelize } from "../config/database/postgres.js"
import { Detalle_solicitud } from "./Detalle_solicitud.js"

export const Producto = sequelize.define('productos', {
    id: {
        type: DataTypes.INTEGER,
        autoIncrement: true,
        primaryKey: true
    },
    nombre: {
        type: DataTypes.STRING,
    },
    descripcion: {
        type: DataTypes.STRING,
    },
    precio: {
        type: DataTypes.INTEGER,
    },
    imagen: {
        type: DataTypes.STRING,
    },
    estado: {
        type: DataTypes.BOOLEAN,
    }
})

Producto.hasMany(Detalle_solicitud, {
    foreignKey: 'producto_id',
    sourceKey: 'id'
})
Detalle_solicitud.belongsTo(Producto, {
    foreignKey: 'producto_id',
    targetKey: 'id'
})
