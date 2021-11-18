const { Schema, model } = require('mongoose');


const umbrellaSchema = Schema({
    status: {
        type: String,
        required: [true, 'El estado es obligatorio']
    },
    number: {
        type: Number,
        required: [true, 'El numero es obligatorio'],
        unique: true
    },
    size: {
        type: String,
        required: [true, 'El tamaño es obligatorio']
    },
    idUser: {
        type: Schema.Types.ObjectId,

    },
    idCombo: {
        type: Schema.Types.ObjectId,

    }
})

module.exports = model('Umbrella', umbrellaSchema);