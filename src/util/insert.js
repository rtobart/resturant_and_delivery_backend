import { models } from '../models/index.js'
import { validateInsert, validateResponse } from './validator.js'

const insert = async (options) => {
    try {
        const { model, values, res } = options
        if (validateInsert(options)) {
            const result = await models[model].create(values)
            const table = models[model]
            return validateResponse(res, result, table)
        }
    }
    catch (error) {
        console.log(error)
        return error
    }
}

export {
    insert
}