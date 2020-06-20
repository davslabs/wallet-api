const sql = require("../connection");
const rateType = require("./rateType.enum");

class Rate {
  constructor(rates) {
    this.type = rateType[rates.type];
    this.value = rates.value;
  }
}

Rate.findAll = () => {
  return new Promise((resolve, reject) => {
    sql.query(`SELECT * FROM rates`, (err, rows, fields) => {
      if (!!err) reject(err);
      else {
        const rates = rows.map((row) => {
          return new Rate(row);
        });

        resolve(rates);
      }
    });
  });
};

Rate.getExchangeRate = (currency) => {
  return new Promise((resolve, reject) => {
    sql.query(
      `SELECT type, value FROM rates WHERE type=${currency}`,
      (err, rows, fields) => {
        if (!!err) reject(err);
        else resolve(new Rate(rows[0]));
      }
    );
  });
};

module.exports = Rate;
