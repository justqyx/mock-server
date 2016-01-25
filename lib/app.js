var http = require('http');
var express = require('express');
var cors = require('cors');
var colors = require('colors');
var _ = require('undercore');

// TODO： 可配置化
var port = 3000;

var createApp = function() {
    var app = express();

    app.use(cors());

    var server = http.createServer(app).listen(port);

    server.on('error', function(error) {
        if (err.code === 'EADDRINUSE') {
            console.log((port + 'is already been used, try new port: ' + (port + 1)).yellow);
            port = port + 1;
            createApp();
        } else {
            throw error;
        }
    });
};

module.exports = createApp;
