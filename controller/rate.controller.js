// const Rate = require('../services/rate.service');
const Rate = require('../database/models/rate.model');
const httpError = require('http-errors');

exports.findAll = (req, res, next) => {
    Rate.findAll((err, data) => {
        if(err) next(httpError(500, err));
        else res.status(200).json(data);
    });
};
