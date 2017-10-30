const mongoose = require('mongoose');
const ResponseUtil = require('../utils/ResponseUtil');
const EnvStatus = require('../enums/EnvStatus');

module.exports = function (app) {

    let api = {};
    let PerfilModel = mongoose.model('Perfil');

    let authService = new app.service.AuthService(app);

    /**
     * @apiDefine none Livre de token
     * Utiliza apenas o token padrão para acessar a API.
     */

    /**
     * @api {post} /api/autenticar Autenticar
     * @apiPermission none
     * @apiGroup Public
     *
     * @apiParamExample {json} Exemplo de requisição:
     *  HTTP/1.1 200 OK
     *  {
     *      "login": "admin",
     *      "senha": "12345678"
     *  }
     *
     * @apiSuccessExample {json} Exemplo de resposta com sucesso:
     *  HTTP/1.1 200 OK
     *  {
     *      "codigo": "000",
     *      "mensagem": "Sucesso",
     *      "nome": "ADMINISTRADOR",
     *      "tipoUsuario": "ADMIN",
     *      "token": "aloidsahdhsaodhashsdahsd",
     *      "foto": "data:image/jpg, asjdnsandnasdsadajdajdadsãdsajdnasjaasd"
     *  }
     */
    api.autenticar = function (req, res) {
        authService.autenticar(req.body.login, req.body.senha).then(result => {
            res.status(ResponseUtil.STATUS_SUCESSO).json(ResponseUtil.getResponse(ResponseUtil.SUCESSO, result.response));
        }).catch(err => {
            console.log(err);
            res.status(ResponseUtil.getErro(err).status).json(ResponseUtil.getErro(err).mensagem);
        });
    };

    api.verificarToken = function (req, res, next) {

        res.header("Access-Control-Allow-Origin", "*");
        res.header("Access-Control-Expose-Headers", "Authorization");
        res.header('Access-Control-Allow-Methods', 'GET,PUT,POST,DELETE,OPTIONS');
        res.header("Access-Control-Allow-Headers", "x-access-token, Origin, X-Requested-With, X-XSRF-TOKEN, Authorization, Content-Type, Accept");

        if ('OPTIONS' === req.method) {
            res.sendStatus(200);
        } else {

            const urlsDefault = ['/api/autenticar'];
            const authorization = req.get('Authorization');

            console.log('==========================================');
            console.log('Authorization: ' + authorization);
            console.log('URL: ' + req.originalUrl);
            console.log('METODO: ' + req.method);

            if (authorization == undefined || authorization == '') {
                console.log('==========================================');
                res.status(401).end();
            } else if (urlsDefault.indexOf(req.originalUrl) >= 0) {
                if (authorization == 'he397yg78po0123') {
                    console.log('==========================================');
                    next();
                } else {
                    console.log('##################################################');
                    console.log('Tem um carinha tentando acessar sem autorização...');
                    console.log('##################################################');
                    console.log('==========================================');
                    res.status(401).end();
                }
            } else {
                const adminUrl = '/api/admin';
                const clienteUrl = '/api/cliente';
                const empresaUrl = '/api/empresa';
                const commonUrl = '/api/common';
                let tipoUsuario = undefined;
                if (req.originalUrl.indexOf(adminUrl) >= 0) {
                    tipoUsuario = 'ADMIN';
                } else if (req.originalUrl.indexOf(clienteUrl) >= 0) {
                    tipoUsuario = 'CLIENTE';
                } else if (req.originalUrl.indexOf(empresaUrl) >= 0) {
                    tipoUsuario = 'EMPRESA';
                } else if (req.originalUrl.indexOf(commonUrl) >= 0) {
                    tipoUsuario = undefined;
                }
                PerfilModel.findOne({
                    token: authorization
                }).then(usuario => {
                    if (!usuario) {
                        console.log('# 028 - Token inválido #');
                        console.log('==========================================');
                        throw {codigo: '028', mensagem: 'Token inválido'};
                    }
                    if (tipoUsuario != undefined && usuario.tipoUsuario != tipoUsuario) {
                        console.log('# 027 - Perfil sem autorização para este serviço #');
                        console.log('==========================================');
                        throw {
                            codigo: '027',
                            mensagem: 'Perfil sem autorização para este serviço',
                            tipoUsuario: usuario.tipoUsuario
                        };
                    }
                    if (new Date() > usuario.dataExpiracao) {
                        console.log('# 019 - Token expirado #');
                        console.log('==========================================');
                        throw {codigo: '019', mensagem: 'Token expirado'};
                    }
                    let result = {perfil: usuario};
                    return result;
                }).then(result => {
                    let perfil = result.perfil;
                    let expiration = new Date().getTime() + (1 * 30 * 60 * 1000);
                    return PerfilModel.findOneAndUpdate({_id: perfil._id}, {$set: {dataExpiracao: expiration}}).exec()
                        .then(perfil => {
                            if (!perfil) {
                                console.log('# 500 - Erro interno de processamento #');
                                console.log('==========================================');
                                console.log(err);
                                res.status(500).end();
                            }
                            result.perfil = perfil;
                            return result;
                        });
                }).then(result => {
                    next();
                }).catch(err => {
                    if (err.codigo) {
                        console.log(JSON.stringify(err));
                        console.log('==========================================');
                        res.status(401).json(err);
                    } else {
                        console.log(err);
                        console.log('==========================================');
                        res.status(500).end();
                    }

                });
            }
        }
    };

    return api;
};