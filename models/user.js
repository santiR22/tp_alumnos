const {model, Schema} = require('mongoose');

// Se le solicitará al usuario que ingrese los siguientes datos...
const UserSchema = new Schema({
    nombre: {
        type: String,
        required: true
    },
    apellido: {
        type: String,
        required: true
    },
    edad: {
        type: Number,
        required: true
    },
    direccion: {
        calle: {
            type: String,
            required: true
        },
        numero: {
            type: Number,
            required: true
        }
    },
    contacto: {
        telefono: {
            type: Number,
            required: true
        },
        email: {
            type: String,
            required: true
        }
    },
    experiencia_laboral: {
        type: String,
        required: true
    },
    conocimientos: {
        type: String,
        required: true
    },
    habilidades: {
        type: String,
        required: true
    },
    gitHub_profile: {
        type: String,
        required: true
    },
    hobbies: {
        type: String,
        default: "sin_datos"
    },
    deporte_favorito: {
        type: String,
        default: "sin_datos"
    },
    comida_favorita: {
        type: String,
        default: "sin_datos"
    },
    username: {
        type: String,
        required: true
    },
    password: {
        type: String,
        required: true
    },
    activo: {
        type: Boolean,
        default: true
    }
});

module.exports = model('User', UserSchema)