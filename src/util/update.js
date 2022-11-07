import { models } from '../models/index.js'
import { validateUpdate, validateResponse } from './validator.js'

const update = async (options) => {
    try {
        const { model, values, res } = options
        const { id } = values
        if (validateUpdate(options)) {
            const result = await models[model].update(values, {
                where: {
                  id: id
                }
            });
            console.log(result)
            if (result[0] === 1) {
                return res.status(200).json({
                    message: 'Registro actualizado con éxito',
                    data: values
                })
            } else {
                return res.status(404).json({
                    message: 'Registro no encontrado',
                    model,
                    id
                })
            }
        }
    }
    catch (error) {
        console.log(error)
        return error
    }
}

export {
    update
}