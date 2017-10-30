const mongoose = require('mongoose');
const ResponseUtil = require('../utils/ResponseUtil');
const StringUtil = require('../utils/StringUtil');

function CommonService() {
    this._PerfilModel = mongoose.model('Perfil');
}

CommonService.prototype._buscarPerfil = function (q, populate, select) {
    let query = this._PerfilModel.findOne(q);
    if (populate) {
        query.populate(populate);
    }
    if (select) {
        query.select(select);
    }
    return query.lean().exec();
};

CommonService.prototype._salvarPerfil = function (perfil) {
    return new this._PerfilModel(perfil).save();
};

CommonService.prototype._atualizarPerfil = function (query, update) {
    return this._PerfilModel.update(query, update).exec();
};

module.exports = function () {
    return CommonService;
};