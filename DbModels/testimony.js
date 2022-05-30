const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const getTestimony = new Schema({
    name: {
        type: String,
        required: true
    },
    email: {
        type: String,
        required: true
    },
    text: {
        type: String,
        required: true
    },
    imageUrl: {
        type: String,
        required: true
    },
    jobposition: {
        type: String,
        required: true
    },
    num: {
        type: Number,
        required: true
    },
    status: {
        type: String,
    }
},{
    timestamps: true
});

module.exports = mongoose.model('Testimony',getTestimony);