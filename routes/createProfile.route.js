'use strict';
var mongoose = require('mongoose');
var express = require('express');
var router = express.Router();

var farmSchema = require('../models/farm')

/*POST new farm*/
router.route('/farm').post((req, res, next) => {
    farmSchema.create(req.body, (error, data) => {
        if (error) {
            return next(error)
        } else {
            console.log(data)
            res.json(data)
        }
    })
})

module.exports = router;
