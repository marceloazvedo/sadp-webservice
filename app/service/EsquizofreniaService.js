const mongoose = require('mongoose');
const ResponseUtil = require('../utils/ResponseUtil');
const StringUtil = require('../utils/StringUtil');

function EsquizofreniaService(app) {
    this._mongoose = mongoose;
    this._esquizofreniaModel = mongoose.model('Esquizofrenia');
    this._commonService = new app.service.CommonService();
}

EsquizofreniaService.prototype._cadastrarEsquizofrenia = function(esquizofrenia) {
    return new this._esquizofreniaModel(esquizofrenia).save();
};

EsquizofreniaService.prototype.cadastrarEsquizofrenia = function(token, esquizofrenia) {
    return this._cadastrarEsquizofrenia(esquizofrenia).then(esquizofrenia => {
        let result = {};
    });
};

module.exports = function () {
    return EsquizofreniaService;
};