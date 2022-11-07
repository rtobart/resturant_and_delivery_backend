import { 
    createOne as _createOne,
    read as _read,
    updateOne as _updateOne,
    deleteOne as _deleteOne

} from './crud.controller.js'

const model = 'Tarifa'
const fields = ['descripcion', 'precio']

const createOne = (req, res) => {
    _createOne(req, res, model, fields)
}
const read = (req, res) => {
    _read(req, res, model)
}
const updateOne = async (req, res) => {
    _updateOne(req, res, model, fields)
}
const deleteOne = async (req, res) => {
    _deleteOne(req, res, model)
}

export {
    createOne,
    read,
    updateOne,
    deleteOne
}