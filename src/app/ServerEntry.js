import React from 'react';
import {renderToString} from 'react-dom/server';
import Hello from './components/Hello.js';
import express from 'express';
import template from './index';
const path = require('path');


let app = express();
const PORT = process.env.ENV_PORT;
// Serve static files from the 'public' folder
console.log(path.join(__dirname,'dist/assets'));
app.use('/assets',express.static(path.join(__dirname,'../../dist/assets')));

var router = express.Router();

router.get('/svc/endpointA', function(req, res) {
    res.send('I am in end point A');
});

router.get('/svc/endpointB', function(req, res) {
    res.send('I am in end point B');
});

app.get('/', function (req, res) {

const appString = renderToString(<Hello/>);
        res.send(template({
            body: appString,
            title: "results.productInfo.title" + " | Walgreens"
        }));


});

// Start server
let server = app.listen(PORT, function () {
  let host = server.address().address;
  let port = server.address().port;

  if (host === '::') {
    host = 'localhost';
  }

  console.log('Example app listening at http://%s:%s', host, port);
});
