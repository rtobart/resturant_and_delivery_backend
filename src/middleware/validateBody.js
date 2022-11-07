const stringFields = [
    'nombre',
    'descripcion',
    'rut',
    'direccion',
    'imagen',
    'hora_apertura',
    'hora_cierre',
    'estado_atencion',
    'telefono',
    'mail',
    'calle',
    'detalle',
    'usuario_id'
]
const numberFields = [
    'precio',
    'restaurant_id',
    'rol_id',
    'numero'
]
const booleanFields = [
    'estado'
]

const validator = (fields, body) => {
    const errors = [];
    fields.forEach((field) => {
        if (!body[field]) {
            errors.push(`El campo ${field} es requerido`);
        }
        // strings
        if (stringFields.includes(field) && body[field] === null) {
            return errors.push(`El campo '${field}' no puede ser nulo`);
        }
        if (stringFields.includes(field) && body[field] === undefined) {
            return errors.push(`El campo '${field}' no puede ser indefinido`);
        }
        if (stringFields.includes(field) && typeof body[field] !== 'string') {
            errors.push(`El campo '${field}' debe ser de tipo string`);
        }
        if (stringFields.includes(field) && body[field].length > 255) {
            errors.push(`El campo '${field}' debe tener menos de 255 caracteres`);
        }
        if (stringFields.includes(field) && body[field].length < 3) {
            errors.push(`El campo '${field}' debe tener al menos 3 caracteres`);
        }
        if (stringFields.includes(field) && body[field] === '') {
            errors.push(`El campo '${field}' no puede estar vacío`);
        }

        // numbers
        if (numberFields.includes(field) && body[field] === null) {
            return errors.push(`El campo '${field}' no puede ser nulo`);
        }
        if (numberFields.includes(field) && body[field] === undefined) {
            return errors.push(`El campo '${field}' no puede ser indefinido`);
        }
        if (numberFields.includes(field) && typeof body[field] !== 'number') {
            errors.push(`El campo '${field}' debe ser de tipo number`);
        }
        if (numberFields.includes(field) && body[field] <= 0) {
            errors.push(`El campo '${field}' debe ser mayor o igual a 0`);
        }
        if (numberFields.includes(field) && body[field] > 999999999) {
            errors.push(`El campo '${field}' debe ser menor a 999999999`);
        }
        if (numberFields.includes(field) && body[field] === '') {
            errors.push(`El campo '${field}' no puede estar vacío`);
        }

        // booleans
        if (booleanFields.includes(field) && body[field] === null) {
            return errors.push(`El campo '${field}' no puede ser nulo`);
        }
        if (booleanFields.includes(field) && body[field] === undefined) {
            return errors.push(`El campo '${field}' no puede ser indefinido`);
        }
        if (booleanFields.includes(field) && typeof body[field] !== 'boolean') {
            errors.push(`El campo '${field}' debe ser de tipo boolean`);
        }
        if (booleanFields.includes(field) && body[field] === '') {
            errors.push(`El campo '${field}' no puede estar vacío`);
        }
        if (booleanFields.includes(field) && body[field] !== true && body[field] !== false) {
            errors.push(`El campo '${field}' debe ser true o false`);
        }
    });
    return errors;
}

export { validator }