const { Schema, model } = require('mongoose');

const CommentSchema = Schema({
    value: {
        type: Number
    },
    description: {
        type: String
    },
    idUser: {
        type: String
    }

})

module.exports = model('Comment', CommentSchema);