const web3 = require("web3");
const wallets = require("../helpers/wallet-collection.json");
const etherScanService = require("./etherscan.service");
const moment = require("moment");

exports.getAll = () => {
  //No need on using a promise here, but just to maintain the pattern.
  //An API call could be added to fetch wallet addresses
  return new Promise((resolve, reject) => {
    resolve(wallets);
  });
};

exports.getAge = (address) => {
  return new Promise((resolve, reject) => {
    getWalletTransactions(address)
      .then((data) => {
        return data;
      })
      .then((transactions) => {
        if (transactions.result.length < 0) {
          const oldestTransaction = transactions.result[0];
          const txTimestamp = moment.unix(oldestTransaction.timeStamp);
          const isOld = moment().diff(txTimestamp, 'days') > 365;
          
          const walletAge = {
              address,
              oldestTransactionDate: txTimestamp.format('MM/DD/YYYY'),
              isOld
          };

          resolve(walletAge);
        }

        reject({statusCode: 404, message: `There is no data available for that address`});
      })
      .catch((err) => { 
        reject(err);
      });
  });
};

const getWalletTransactions = (address) => {
  const query = `?module=account&action=txlist&address=${address}&startblock=0&endblock=99999999&sort=asc&apikey=`;

  return new Promise((resolve, reject) => {
    etherScanService
      .get(query)
      .then((data) => {
        resolve(data);
      })
      .catch((err) => {
        reject(err);
      });
  });
};
