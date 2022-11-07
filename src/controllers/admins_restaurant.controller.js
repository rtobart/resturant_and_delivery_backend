import { 
    createOne as _createOne,
    read as _read,
    updateOne as _updateOne,
    findById,
    deleteOne as _deleteOne

} from './crud.controller.js'

const model = 'Admin_restaurant'
const fields = ['usuario_id', 'restaurant_id']

const createOne = async (req, res) => {
    const { usuario_id } = req.body
    const user = await findById('Usuario', usuario_id)
    if (user.rol_id === 1) {
        _createOne(req, res, model, fields)
    } else {
        return res.status(400).json({error: 'El usuario no es administrador de restaurant'})
    }
}
const read = (req, res ) => {
    _read(req, res, model, { includeForain: true, models: ['Usuario', 'Restaurant'] })
}
const deleteOne = async (req, res) => {
    _deleteOne(req, res, model)
}

export {
    createOne,
    read,
    deleteOne
}