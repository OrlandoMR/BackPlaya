const { Schema, model } = require('mongoose');

const CreditCardSchema = Schema({
    numberCard: {
        type: String,
        required: [true, 'El numero de la tarjeta es obligatorio']
    },
    CCV: {
        type: String,
        required: [true, 'El CCV es obligatorio'],
        unique: true
    },
    expireDate: {
        type: Date,
        required: [true, 'La fecha de expiracion es obligatoria']
    },
    userId: {
        type: String,
        required: true,
    }
})

module.exports = model('CreditCard', CreditCardSchema);