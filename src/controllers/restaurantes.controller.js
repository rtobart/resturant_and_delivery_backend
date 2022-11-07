import { 
    createOne as _createOne,
    read as _read,
    updateOne as _updateOne,
    changeState as _changeState
} from './crud.controller.js'

const model = 'Restaurant'
const fields = [
    'rut',
    'nombre',
    'direccion',
    'telefono',
    'imagen',
    'hora_apertura',
    'hora_cierre',
    'estado',
    'estado_atencion',
    'mail',
]

const createOne = (req, res) => {
    _createOne(req, res, model, fields)
}
const read = (req, res) => {
    _read(req, res, model)
}
const updateOne = async (req, res) => {
    const newFields = fields.filter((item) => item !== 'estado')
    _updateOne(req, res, model, newFields)
}
const changeState = async (req, res) => {
    _changeState(req, res, model)
}

export {
    createOne,
    read,
    updateOne,
    changeState
}