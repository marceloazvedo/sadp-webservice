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
    dataUltimoAcesso: {
        type: Date,
        required: false
    },
    dataExpiracao: {
        type: Date,
        required: false
    },
    alterarSenhaProxAcesso: {
        type: Boolean,
        default: false, 
        required: true
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
    endereco : {
        type: Schema.Types.ObjectId,
        ref: 'Endereco',
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