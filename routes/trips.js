// Initializing express and express-router
const express = require('express'),
    path = require('path'),
    config = require( path.join(__dirname, '../config') ),
    router = express.Router();


// Importing services
const TripService = require( path.join(__dirname, '../services/TripService') );







// Defining routes
router.get('/:url', (req, res) => {

    TripService.getTripByURL(req.params.url, (resp) => {
        res.json(resp);
    });


});

module.exports = router;