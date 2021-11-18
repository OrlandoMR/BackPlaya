const { Schema, model } = require('mongoose');

const PaymentSchema = Schema({
    total: {
        type: Number,
        required: [true, 'El total es obligatorio']
    },
    number: {
        type: Number,
        required: [true, 'El numero es obligatorio'],
        unique: true
    },
    idCombo: {
        type: Schema.Types.ObjectId
    },
    idUmbrella: {
        type: Schema.Types.ObjectId
    },
    idUser: {
        type: Schema.Types.ObjectId
    },
    fecha: {
        type: Date
    }
})

module.exports = model('Payment', PaymentSchema);