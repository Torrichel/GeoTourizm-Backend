// Initializing express and express-router
const express = require('express'),
    path = require('path'),
    config = require( path.join(__dirname, '../config') ),
    router = express.Router();


// Importing services
const TripService = require( path.join(__dirname, '../services/TripService') );





// Defining routes

// 1. Get all trips
router.get('/', (req, res) => {

    TripService.getAllTrips((resp) => {
        res.json(resp);
    });


});

// 2. Get one single trip
router.get('/:url', (req, res) => {

    TripService.getTripByURL(req.params.url, (resp) => {
        res.json(resp);
    });


});

module.exports = router;