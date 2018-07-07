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


// Requiring and mounting routes
const trips = require( path.join(__dirname, 'routes/trips') );

app.use('/trips', trips);






app.listen(8080, () => console.log('Example app listening on port 8080!'));
