const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const schema = mongoose.Schema({

    diretrize: {
        type: String,
        required: true
    }

});

mongoose.model('DiretrizDiagnostico', schema);