'use strict';

// Importing basic modules
const path = require('path');

// Importing config file
const config = require( path.join(__dirname, '../config') );


// Connecting to DB and initializing client
const { Client } = require('pg');
const client = new Client({
    connectionString: config.connectionString
});
client.connect();



exports.getTripByURL = (url, cb) => {

    // Check if url exist
    if(!url) {
        cb({
            error: true,
            code: 400,
            message: 'URL is not presented'
        });
    }



    client.query(`SELECT * FROM trips WHERE page_url='${url}'`, (err, resp) => {


        // Check resp on existing
        if(!resp) {
            cb({
                error: true,
                code: 500,
                message: 'Problems with connection to DB'
            });
        } else {
            cb({
                error: false,
                code: 200,
                data: resp ? resp.rows[0] : {}
            });
        }


    })

};


exports.getAllTrips = (cb) => {

    client.query(`SELECT * FROM trips`, (err, resp) => {




        // Check resp on existing
        if(!resp) {
            cb({
                error: true,
                code: 500,
                message: 'Problems with connection to DB'
            });
        } else {


            cb({
                error: false,
                code: 200,
                data: resp.rows.length ? resp.rows : []
            });
        }


    })

};