'use strict';

const path = require('path');
require('dotenv').config( {path: path.join(__dirname, '.env')} );

module.exports = {
    connectionString: process.env.CONNECTION_STRING,
    port: process.env.PORT
};