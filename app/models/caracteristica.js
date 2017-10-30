const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const schema = mongoose.Schema({

    caracteristica: {
        type: String,
        required: true
    }

});

mongoose.model('Caracteristica', schema);