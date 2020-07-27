const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const reflectModel = new Schema({
    userID: {
        type: Schema.ObjectId,
    },
    text: {
        type: String,
        required: true
    },
})

module.exports = mongoose.model('reflect', reflectModel)