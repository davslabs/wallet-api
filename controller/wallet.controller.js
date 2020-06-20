const walletService = require("../services/wallet.service");
const httpError = require("http-errors");

exports.getAll = (req, res, next) => {
  walletService
    .getAll()
    .then((data) => {
      res.status(200).json(data);
    })
    .catch((err) => {
      next(httpError(500, err));
    });
};

exports.getAge = (req, res, next) => {
  const { address } = req.params;
  walletService
    .getAge(address)
    .then((data) => {
      res.status(200).json(data);
    })
    .catch((err) => {
      next(httpError(500, err));
    });
};

exports.getBalance = (req, res, next) => {
  const { address } = req.params;
  walletService
    .getBalance(address)
    .then((data) => {
      res.status(200).json(data);
    })
    .catch((err) => {
      next(httpError(500, err));
    });
};

exports.getBalanceInCurrency = (req, res, next) => {
  const { address, currency } = req.params;  
  walletService
    .getBalanceInCurrency(address, currency)
    .then((data) => {
      res.status(200).json(data);
    })
    .catch((err) => {
      next(httpError(500, err));
    });
};
