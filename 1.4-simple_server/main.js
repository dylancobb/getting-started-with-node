'use strict';

const port = 3000,
    http = require('http'),
    httpStatus = require('http-status-codes'),
    app = http.createServer((req, res) => {
        console.log('Received an incoming request!');
        res.writeHead(httpStatus.OK, {
            'Content-Type': 'text/html'
        });

        let resMessage = '<h1>Hello, world!</h1>';
        res.write(resMessage);
        res.end();
        console.log(`Sent a response : ${resMessage}`);
    });

app.listen(port);
console.log(`The server has started and is listening on port number: ${port}`);