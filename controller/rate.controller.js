const rateService = require('../services/rate.service');
const httpError = require('http-errors');

exports.findAll = (req, res, next) => {
    rateService.findAll().then(data => {
        res.status(200).json(data);
    }).catch(err => {
        next(httpError(500, err));
    });
};
