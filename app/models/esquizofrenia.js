const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const schema = mongoose.Schema({

    caracteristicas: [{
        type: Schema.Types.ObjectId,
        ref: 'Caracteristica',
        required: true
    }],
    diretrizesDiganosticos: [{
        type: Schema.Types.ObjectId,
        ref: 'DiretrizDiagnostico',
        required: true
    }]

});

mongoose.model('Esquizofrenia', schema);