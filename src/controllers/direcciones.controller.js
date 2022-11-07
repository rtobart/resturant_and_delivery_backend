import { 
    createOne as _createOne,
    read as _read,
    findById as _findById,
    updateOne as _updateOne,
    deleteOne as _deleteOne
} from './crud.controller.js'

const model = 'Direccion'
const fields = [
    'nombre',
    'cadena',
    'usuario_id',
]

const createOne = (req, res) => {
    _createOne(req, res, model, fields)
}
const read = (req, res) => {
    _read(req, res, model)
}
const updateOne = async (req, res) => {
    const newFields = fields.filter((item) => item !== 'usuario_id')
    _updateOne(req, res, model, newFields)
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