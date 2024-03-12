const mongoose = require("mongoose");

// Define el esquema del usuario
const orderSchema = new mongoose.Schema({
    creation_date: {
        type: String,
        required: true
    },
    delivery_date: {
        type: String,
        required: true
    },
    order_status: {
        type: String,
        required: true
    },
    total_order: {
        type: Number,
        required: true
    },
    products: [{
        name: {
            type: String,
            required: true
        },
        image: {
            type: String,
            required: true
        },
        quantity: {
            type: Number,
            required: true
        },
        price: {
            type: Number,
            required: true
        }
    }]
});

// Crea el modelo 'Order' a partir del esquema definido
const Order = mongoose.model('Order', orderSchema);

// Exporta el modelo para que pueda ser utilizado en otras partes de la aplicación
module.exports = Order;
