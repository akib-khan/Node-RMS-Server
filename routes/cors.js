const express = require('express');
const cors = require('cors');
const app = express();

const whitelist = ['http://localhost:3000', 'https://localhost:3443', 'http://desktop-gjst4bb:3001'];
var corsOptionsDelegate = (req, callback) => {
    var corsOptions;
    console.log("Hi there!! ",req.header('Origin'));
    if(whitelist.indexOf(req.header('Origin')) !== -1) {
      //  console.log("Found in whitelist");
        corsOptions = { origin: true };
    }
    else {
        //console.log("Not Found in whitelist");
        corsOptions = { origin: false };
    }
    callback(null, corsOptions);
};

exports.cors = cors();
exports.corsWithOptions = cors(corsOptionsDelegate);