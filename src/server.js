import app from './app.js'
import { sequelize } from './config/index.js'
import './models/Admin_restaurant.js'
import './models/Detalle_solicitud.js'
import './models/Direccion.js'
import './models/Log_solicitud.js'
import './models/Producto.js'
import './models/Reparto.js'
import './models/Restaurant.js'
import './models/Rol.js'
import './models/Solicitud.js'
import './models/Tarifa.js'
import './models/Tipo_solicitud.js'
import './models/Usuario.js'
import * as dotenv from 'dotenv'
dotenv.config()

const port = process.env.PORT

async function main() {
    try {
        // await sequelize.sync({ force : true })
        app.listen(port, () => console.log(`App listening on port ${port}!`))
    } catch (error) {
        console.error('Unable to connect to the database:', error);
    }
}

main()