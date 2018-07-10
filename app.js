'use strict';

// Requiring main modules
const express = require('express'),
    bodyParser = require('body-parser'),
    moment = require('moment'),
    morgan = require('morgan'),
    path = require('path'),
    config = require( path.join(__dirname, 'config') ),
    app = express();


// Defining middleware
app.use(morgan('dev'));
app.use(bodyParser.json());

// Adding headers
app.use((req, res, next) => {

    // Website you wish to allow to connect
    res.setHeader('Access-Control-Allow-Origin', '*');

    // Request methods you wish to allow
    res.setHeader('Access-Control-Allow-Methods', 'GET, POST, OPTIONS, PUT, PATCH, DELETE');

    // Request headers you wish to allow
    res.setHeader('Access-Control-Allow-Headers', 'X-Requested-With,content-type');

    // Set to true if you need the website to include cookies in the requests sent
    // to the API (e.g. in case you use sessions)
    res.setHeader('Access-Control-Allow-Credentials', true);

    // Pass to next layer of middleware
    next();
});


// Requiring and mounting routes
const trips = require( path.join(__dirname, 'routes/trips') );

app.use('/trips', trips);






app.listen(8080, () => console.log('Example app listening on port 8080!'));