const Rate = require("../database/models/rate.model");

exports.findAll = () => {
  return new Promise((resolve, reject) => {
    Rate.findAll()
      .then((data) => {
        resolve(data);
      })
      .catch((err) => {
        reject(err);
      });
  });
};

exports.getRateExchange = (currency) => {
  return new Promise((resolve, reject) => {
    Rate.getExchangeRate(currency)
      .then((data) => {
        resolve(data);
      })
      .catch((err) => {
        reject(err);
      });
  });
};
