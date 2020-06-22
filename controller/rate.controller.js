const rateService = require("../services/rate.service");
const httpError = require("http-errors");

exports.findAll = (req, res, next) => {
  rateService
    .findAll()
    .then((data) => {
      res.status(200).json(data);
    })
    .catch((err) => {
      next(httpError(500, err));
    });
};

exports.updateExchangeRate = (req, res, next) => {
  const { currency } = req.params;
  const { value } = req.body;


  if (value === undefined || value.length === 0) {
    next(httpError(400, { message: "Value is missing on request body" }));
    return;
  }

  rateService
    .updateExchangeRate(value, currency)
    .then((data) => {
      res.status(200).json({type: currency, value: data});
    })
    .catch((err) => {
      next(httpError(500, err));
    });
};

exports.getExchangeRate = (req, res, next) => {
  const { currency } = req.params;
  rateService
    .getExchangeRate(currency)
    .then((data) => {
      res.status(200).json(data);
    })
    .catch((err) => {
      next(httpError(500, err));
    });
};
