const mongoose = require("mongoose");

// Define el esquema del usuario
const userSchema = new mongoose.Schema({
    name: { // Nombre
        type: String,
        required: true
    },
    phone: { // Teléfono
        type: String,
        required: true
    },
    document: { // Documento
        type: String,
        required: true
    },
    email: { // Correo
        type: String,
        required: true,
        unique: true // Asegura que el correo sea único en la base de datos
    },
    username: { // Usuario
        type: String,
        required: true,
        unique: true // Asegura que el nombre de usuario sea único
    },
    password: { // Contraseña
        type: String,
        required: true
    }
});

// Crea el modelo 'User' a partir del esquema definido
const User = mongoose.model('User', userSchema);

// Exporta el modelo para que pueda ser utilizado en otras partes de la aplicación
module.exports = User;
