let express = require('express');
let consign = require('consign');
let bodyParser = require('body-parser');

let app = express();

app.use(express.static('./public'));

app.use(bodyParser({ limit: '50mb' }));
app.use(bodyParser.json());

consign({ cwd: 'app' })
	.include('models')
	.then('service')
	.then('api')
	.then('routes/interceptor.js')
	.then('routes')
	.into(app);

module.exports = app;