const mongoose = require('mongoose');

const ResponseUtil = require('../utils/ResponseUtil');

module.exports = function (app) {

    let api = {};
    const esquizofreniaService = new app.service.EsquizofreniaService(app);


    api.cadastrarEsquizofrenia = (req, res) => {
        const authorization = req.get('Authorization');
        new esquizofreniaService.cadastrarEsquizofrenia(token, req.body).then(response => {
            res.status(ResponseUtil.STATUS_SUCESSO).json(ResponseUtil.getResponse(ResponseUtil.SUCESSO, response));
        }).catch(err => {
            console.log(err);
            res.status(ResponseUtil.getErro(err).err)
        });
    };

    return api;
};