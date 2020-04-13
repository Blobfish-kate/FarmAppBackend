'use strict';
var mongoose = require('mongoose');
var express = require('express');
var router = express.Router();

var farmSchema = require('../models/farm')

/* GET Farm List Page */
router.route('/').get((req, res) => {
    farmSchema.find((error, data) => {
        if (error) {
            return next(error)
        } else {
            res.json(data)
        }
    })
})

module.exports = router;
