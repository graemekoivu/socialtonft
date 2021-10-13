//const http = require('http');
const https = require('https');
const fs = require('fs');
const path = require('path');
const app = require('./app');
//const port = process.env.PORT || 3000;

//const server = http.createServer(app);
const https_server = https.createServer(
    {
        key: fs.readFileSync(path.join(__dirname, 'cert', 'key.pem')), //should these just be 'readFile(...)'?
        cert: fs.readFileSync(path.join(__dirname, 'cert', 'cert.pem'))
    },
    app)

https_server.listen(3443);
//server.listen(port);