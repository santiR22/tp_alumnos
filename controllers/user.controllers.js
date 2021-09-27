const ctrlHome = {};
const User = require('../models/user');

// Devuelve todos los usuarios de la conexion...
ctrlHome.rutaGet = async (req, res) => {
    const users = await User.find({activo: true}); //Consulta todos los documentos...
    
    // Respuesta del servidor...
    res.json(users);
};

// Controlador que almacena un nuevo usuario...
ctrlHome.rutaPost = async (req, res) => {
    const {
        nombre, 
        apellido, 
        edad, 
        direccion, 
        contacto, 
        experiencia_laboral,
        conocimientos,
        habilidades,
        gitHub_profile,
        username, 
        password
    } = req.body;

    try {
        const user = new User({
            nombre, 
            apellido, 
            edad, 
            direccion, 
            contacto, 
            experiencia_laboral,
            conocimientos,
            habilidades,
            gitHub_profile,
            username,
            password
        });
        await user.save();
        return res.json({msg: 'Usuario creado correctamente'});

    } catch (error) {

        console.log('Error al crear un nuevo usuario: ', error);
        res.status(500).json({msg: 'Error al crear nuevo usuario'})
    }
};

module.exports = ctrlHome