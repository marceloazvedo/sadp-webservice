module.exports = function (app) {
    let api = app.api.auth;

    app.use('/*', api.verificarToken);

    app.post('/api/autenticar', api.autenticar);

};