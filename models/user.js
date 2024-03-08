const mongoose = require("mongoose");

// Define el esquema del usuario
const userSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true
  },
  age: {
    type: Number,
    required: true
  },
  email: {
    type: String,
    required: true
  }
});

// Crea el modelo 'User' a partir del esquema definido
const User = mongoose.model('User', userSchema);

// Exporta el modelo para que pueda ser utilizado en otras partes de la aplicación
module.exports = User;
