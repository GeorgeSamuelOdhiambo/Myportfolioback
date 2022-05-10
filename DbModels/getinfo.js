const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const getinfochema = new Schema({
    email: {
        type: String,
        required: true
    },
    myText: {
        type: String,
        required: true
    },
    location: {
        type: String,
        required: true
    },
    phonenumberOne: {
        type: String,
        require: true
    },
    phonenumberTwo: {
        type: String,
        require: true
    }
},{
    timestamps: true
});

module.exports = mongoose.model('Footerinfo',getinfochema);