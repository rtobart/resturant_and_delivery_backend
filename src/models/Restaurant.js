import { DataTypes } from "sequelize"
import { sequelize } from "../config/database/postgres.js"
import { Admin_restaurant } from "./Admin_restaurant.js"
import { Producto } from "./Producto.js"
import { Solicitud } from "./Solicitud.js"

export const Restaurant = sequelize.define('restaurantes', {
    id: {
        type: DataTypes.INTEGER,
        autoIncrement: true,
        primaryKey: true
    },
    rut: {
        type: DataTypes.STRING,
    },
    nombre: {
        type: DataTypes.STRING,
    },
    direccion: {
        type: DataTypes.STRING,
    },
    telefono: {
        type: DataTypes.STRING,
    },
    imagen: {
        type: DataTypes.STRING,
    },
    hora_apertura: {
        type: DataTypes.STRING,
    },
    hora_cierre: {
        type: DataTypes.STRING,
    },
    estado: {
        type: DataTypes.BOOLEAN,
    },
    estado_atencion: {
        type: DataTypes.STRING,
    },
    mail: {
        type: DataTypes.STRING,
    }
})

Restaurant.hasMany(Admin_restaurant, {
    foreignKey: 'restaurant_id',
    sourceKey: 'id'
})
Admin_restaurant.belongsTo(Restaurant, {
    foreignKey: 'restaurant_id',
    targetKey: 'id'
})
Restaurant.hasMany(Producto, {
    foreignKey: 'restaurant_id',
    sourceKey: 'id'
})
Producto.belongsTo(Restaurant, {
    foreignKey: 'restaurant_id',
    targetKey: 'id'
})
Restaurant.hasMany(Solicitud, {
    foreignKey: 'restaurant_id',
    sourceKey: 'id'
})
Solicitud.belongsTo(Restaurant, {
    foreignKey: 'restaurant_id',
    targetKey: 'id'
})
