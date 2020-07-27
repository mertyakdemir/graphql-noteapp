const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const userModel = new Schema({
    userName: {
        type: String,
        required: true
    },
    password: {
        type: String,
        required: true
    },
    age: Number
})

module.exports = mongoose.model('user', userModel)