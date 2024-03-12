const mongoose = require("mongoose");

// Define el esquema del usuario
const dateSchema = new mongoose.Schema({
    user_id: {
        type: String,
        required: true
    },
    user_name: {
        type: String,
        required: true
    },
    appointment_date: {
        type: String,
        required: true
    },
    description: {
        type: String,
        required: true
    },
    status: {
        type: String,
        enum: ['Pendiente', 'Confirmada', 'Cancelada'],
        default: 'Pendiente'
    }
});

// Crea el modelo 'Date' a partir del esquema definido
const Date = mongoose.model('Date', dateSchema);

// Exporta el modelo para que pueda ser utilizado en otras partes de la aplicación
module.exports = Date;
