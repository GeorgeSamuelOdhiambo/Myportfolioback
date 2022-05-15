const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const skillsinfochema = new Schema({
    myText: {
        type: String,
        required: true
    },
    imageUrl: {
        type: String,
        required: true
    }
},{
    timestamps: true
});

module.exports = mongoose.model('Aboutmeinfo',skillsinfochema);