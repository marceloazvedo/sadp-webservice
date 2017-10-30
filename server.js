let http = require('http');
let app = require('./config/express');
var application = require('./prod.json');

require('./config/database')(application.db);

let port = process.env.PORT || 3000;

let server = http.createServer(app);

app.settings.env = application.env;

server.listen(port, function () {
	console.log('Servidor iniciado');
});
