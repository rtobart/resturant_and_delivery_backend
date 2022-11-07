import { 
    createOne as _createOne,
    read as _read,
    updateOne as _updateOne,
    changeState as _changeState
} from './crud.controller.js'
import { createUser } from '../services/auth-admin.js'

const model = 'Usuario'
const fields = [
    'rut',
    'nombre',
    'apellido',
    'correo',
    'contraseña',
    'telefono',
    'estado',
    'rol_id'
]


const createOne = async (req, res) => {
    const { correo, contraseña } = req.body
    if (!correo || !contraseña) return res.status(400).json({ message: 'Email and password are required' })
    const user = await createUser(
        { email: correo, password: contraseña },
        { ignoreExisting: true }
    )
    if (!user) return res.status(400).json({ message: 'El email ya se encuentra registrado' })
    req.body.id = user.uid
    _createOne(req, res, model, fields)
}
const updateOne = async (req, res) => {
    const newFields = fields.filter((item) => item !== 'correo' && item !== 'contraseña' && item !== 'estado')
    _updateOne(req, res, model, newFields)
}
const changeState = async (req, res) => {
    _changeState(req, res, model)
}
const read = (req, res) => {
    _read(req, res, model)
}

export {
    createOne,
    read,
    updateOne,
    changeState
}