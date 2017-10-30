const mongoose = require('mongoose');
const ResponseUtil = require('../utils/ResponseUtil');
const StringUtil = require('../utils/StringUtil');
const DateUtil = require('../utils/DateUtil');

function AuthService(app) {
    this._commonService = new app.service.CommonService(mongoose);
    this._secret = app.settings.secret;
}

AuthService.prototype.autenticar = function (login, senha) {
    let validation = new Promise((resolve, reject) => {
        let query = undefined;
        if (login) {
            if (StringUtil.apenasNumeros(login)) {
                query = {cpfCnpj: {$eq: login}};
            } else {
                query = {login: {$eq: login}};
            }
        } else {
            reject(ResponseUtil.getMensagem(ResponseUtil.CAMPO_EM_BRANCO));
        }
        if (login.toLowerCase() !== login) {
            reject(ResponseUtil.getMensagem(ResponseUtil.LOGIN_LETRAS_MINUSCULAS));
        }
        let result = {
            query: query
        };
        resolve(result);
    });

    return validation.then(result => {
        return this._commonService._buscarPerfil(result.query, undefined, undefined).then(perfil => {
            if (!perfil) {
                throw ResponseUtil.getMensagem(ResponseUtil.PERFIL_NAO_ENCONTRADO);
            }
            if (senha !== perfil.senha) {
                throw ResponseUtil.getMensagem(ResponseUtil.SENHA_INVALIDA);
            }
            if (!perfil.token || !(perfil.dataExpiracao > new Date())) {
                perfil.token = StringUtil.getToken(perfil);
            }
            result.update = {
                $set: {
                    dataExpiracao: DateUtil.getDataExpiracao(),
                    dataUltimoAcesso: new Date(),
                    token: perfil.token,
                    foto: perfil.foto
                }
            };
            result.perfil = perfil;
            result.q = {_id: perfil._id};
            return result;
        }).then(result => {
            return this._commonService._atualizarPerfil(result.q, result.update).then(r => {
                result.response = {
                    nome: result.perfil.nome,
                    tipoUsuario: result.perfil.tipoUsuario,
                    token: result.perfil.token,
                    foto: result.perfil.foto
                };
                return result;
            });
        });
    });
};

module.exports = function () {
    return AuthService;
};