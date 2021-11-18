const { Schema, model } = require('mongoose');

const ComboSchema = Schema({
    value: {
        type: Number,
        required: true
    },
    nombre: {
        type: String
    },
    img: {
        type: String
    },
    description: {
        type: []
    }
})

module.exports = model('Combo', ComboSchema);