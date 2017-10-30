const mongoose = require('mongoose');
const Schema = mongoose.Schema;
const TipoUsuario = require('../enums/TipoUsuario');

const schema = mongoose.Schema({

    nome: {
        type: String,
        required: true
    },
    login: {
        type: String,
        required: true,
        lowercase: true,
        unique: true
    },
    senha: {
        type: String,
        required: true
    },
    email: {
        type: String,
        lowercase: true,
        required: true
    },
    status: {
        type: Boolean,
        default: true,
        require: true
    },
    cpfCnpj: {
        type: String,
        required: true,
        unique: true
    },
    dataCadastro: {
        type: Date,
        default: Date.now,
        required: true
    },
    dataExpiracao: {
        type: Date,
        required: false
    },
    tipoUsuario: {
        type: String,
        enum: [TipoUsuario.PSIQUIATRA,TipoUsuario.ADMIN],
        required: true
    },
    token: {
        type: String,
        required: false
    },
    telefone: {
        type: String,
        required: false
    },
    foto: {
        type: String,
        required: false
    }

});

mongoose.model('Perfil', schema);