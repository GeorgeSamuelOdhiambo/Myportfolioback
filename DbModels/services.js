const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const serviceschema = new Schema({
    header: {
        type: String,
        required: true
    },
    imageUrl: {
        type: String,
        required: true
    },
    text: {
        type: String,
        required: true
    }
},{
    timestamps: true
});

module.exports = mongoose.model('Services',serviceschema);