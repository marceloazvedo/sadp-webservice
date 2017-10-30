const TipoUsuario = require('../app/enums/TipoUsuario');

module.exports = function (uri) {

    let mongoose = require('mongoose');
    let PerfilModel = mongoose.model('Perfil');

    mongoose.connect(uri, {useMongoClient: true});

    mongoose.connection.on('connected', function () {
        console.log('Conectado ao MongoDB');
        const perfil = {
            nome: "ADMINISTRADOR",
            login: "admin",
            senha: "123123123",
            email: "marceloazvedo1@gmail.com",
            cpfCnpj: "10662165411",
            tipoUsuario: TipoUsuario.ADMIN,
            telefone: "83 987457858"
        };
        PerfilModel.find({}).lean().then(perfils => {
            if(perfils.length===0){
                new PerfilModel(perfil).save().then(perfil => {
                    console.log('Inicializando repositório, adicionando perfil ADMIN: ' + JSON.stringify(perfil));
                });
            }
        });
    });

    mongoose.connection.on('error', function (error) {
        console.log('Erro na conexão: ' + error);
    });

    mongoose.connection.on('disconnected', function () {
        console.log('Desconectado do MongoDB');
    });

    process.on('SIGINT', function () {
        mongoose.connection.close(function () {
            console.log('Aplicação terminada, conexão fechada')
            process.exit(0);
        });

    })
};
