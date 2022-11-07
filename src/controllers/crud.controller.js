import { insert } from '../util/insert.js'
import { getAll, getOneById, getAllByRelationId } from '../util/get.js'
import { update } from '../util/update.js'
import { disable } from '../util/disable.js'
import { _delete } from '../util/delete.js'
import { validator } from '../middleware/validateBody.js'

const createOne = async (req, res, model, fields) => {
    const errors = validator(fields, req.body)
    if (errors.length > 0) {
        return res.status(400).json({ errors })
    } else {
        const options = {
            model,
            values: req.body,
            res,
        }
        const result = await insert(options)
        if (result.parent) {
            if (result.parent.name === 'error') {
                return res.status(400).json({error: result.parent.detail})
            }
        }
    }
}
const updateOne = async (req, res, model, fields) => {
    fields.push('id')
    const errors = validator(fields, req.body)
    if (errors.length > 0) {
        return res.status(400).json({ errors })
    } else {
        const options = {
            model,
            values: req.body,
            res,
        }
        const result = await update(options)
        if (result.parent) {
            if (result.parent.name === 'error') {
                return res.status(400).json({error: result.parent.detail})
            }
        }
    }
}
const changeState = async (req, res, model) => {
    const { id, estado } = req.body
    console.log(req.body)
    if (!id || estado === undefined) {
        return res.status(400).json({ error: 'id y estado son requeridos' })
    }
    const options = {
        model,
        values: req.body,
        res,
    }
    const result = await update(options)
    if (result.parent) {
        if (result.parent.name === 'error') {
            return res.status(400).json({error: result.parent.detail})
        }
    }
}


const findById = async (model, id) => {
    const response = await getOneById(model, id);
    if (response === null) {
        const error = {error: `${model} id ${id} no encontrado`}
        console.log(error)
        return error
    } else {
        return response
    }
}

const read = async (req, res, model, options = { includeForain: false, models: [] }) => {
    const { id } = req.query
    let response
    if (id) {
        response = await findById(model, id)
        if (response.error) {
            return res.status(404).json(response)
        } else {
            if (options.includeForain) {
                const { models } = options
                for (const model of models) {
                    const forain = await findById(model, response[`${model.toLowerCase()}_id`])
                    response.dataValues[`${model.toLowerCase()}`] = forain
                }
            }
            res.status(200).json(response)
        } 
    } else {
        response = await getAll(model)
        res.status(200).json(response)
    } 

}

const deleteOne = async (req, res, model) => {
    const { id } = req.query
    
    if (!id) {
        return res.status(400).json({ error: 'id es requerido' })
    }
    const options = {
        model,
        values: id,
        res,
    }
    await _delete(options)

}

const 



export {
    createOne,
    read,
    findById,
    updateOne,
    changeState,
    deleteOne
}