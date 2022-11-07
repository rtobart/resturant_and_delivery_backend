const validateInsert = (body) => {
    const { model, values, res } = body
    if (model === undefined) {
        if (res) {
            res.status(500).json({
                message: 'Error al crear el registro / No se ha especificado el modelo'
            })
            return false
        } else {
            console.log('Error al crear el registro / No se ha especificado el modelo')
            return false
        }
    } else if (values === undefined) {
        if (res) {
            res.status(500).json({
                message: 'Error al crear el registro / No se han especificado los valores'
            })
            return false
        } else {
            console.log('Error al crear el registro / No se han especificado los valores')
            return false
        }
    } else {
        return true
    }
}
const validateUpdate = (body) => {
    const { model, values, res } = body
    if (model === undefined) {
        if (res) {
            res.status(500).json({
                message: 'Error al actualizar el registro / No se ha especificado el modelo'
            })
            return false
        } else {
            console.log('Error al actualizar el registro / No se ha especificado el modelo')
            return false
        }
    } else if (values === undefined) {
        if (res) {
            res.status(500).json({
                message: 'Error al actualizar el registro / No se han especificado los valores'
            })
            return false
        } else {
            console.log('Error al actualizar el registro / No se han especificado los valores')
            return false
        }
    } else {
        return true
    }
}

const validateResponse = (res, result, table) => {
    if (res) {
        if (result.dataValues) {
            console.log('1')
            console.log('🚀 ~ Insert: ', result.dataValues)
            res.status(201).json({
                msj: 'Registro creado con éxito',
                tabla: table,
                data: result.dataValues
            })
        } else {
            console.log('2')
            console.log('Error al crear el registro, tabla: ', table)
            res.status(500).json({
                msj: 'Error al crear el registro',
                tabla: table,
            })
        }
        return result
    } else {
        if (result.dataValues) {
            console.log('Registro creado con éxito: ', result.dataValues)
            return result
        } else {
            console.log('3')
            console.log('Error al crear el registro, tabla: ', table)
            return false
        }
    }
}

export {
    validateInsert,
    validateResponse,
    validateUpdate
}