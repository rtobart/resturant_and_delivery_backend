import { models } from '../models/index.js'

const getAll = async (model) => {
    return await models[model].findAll()
}
const getOneById = async (model, id) => {
    return await models[model].findByPk(id)
}
const getAllByRelationId = async (model, relation, id) => {
    return await models[model].findAll({
        where: {
            [relation]: id
        }
    })
}
export {
    getAll,
    getOneById,
    getAllByRelationId
}