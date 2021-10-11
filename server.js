const http = require('http');
const https = require('https')
const app = require('./app');
const port = process.env.PORT || 3000;

const server = http.createServer(app);
const https_server = https.createServer(app)

//https_server.listen(port)
server.listen(port);