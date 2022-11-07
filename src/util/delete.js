import { models } from '../models/index.js'
import { validateUpdate } from './validator.js'

const _delete = async (options) => {
    try {
        
        const { model, values, res } = options
        if (validateUpdate(options)) {
            const result = await models[model].destroy({
                where: {
                  id: values
                }
              });
            console.log(result)
            if (result === 1) {
                return res.status(200).json({
                    message: 'Registro eliminado con éxito',
                    data: `${model} id ${values}`
                })
            } else {
                return res.status(404).json({
                    message: 'Registro no encontrado',
                    model,
                    values
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
    _delete
}