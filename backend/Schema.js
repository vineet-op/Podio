const mongoose = require('mongoose');

const schema = new mongoose.Schema({
    title: {
        type: String,
        required: true
    },
    file: {
        type: String,
        required: true,
    }
});

const Model = mongoose.model('Model', schema);

module.exports = Model
