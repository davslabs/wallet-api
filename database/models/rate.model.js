const sql = require('../connection');
const rateType = require('./rateType.model');

class Rate {
    constructor(rates) {
        this.type = rates.type;
        this.value = rates.value;
    }
};

Rate.findAll = () => {
  return new Promise((resolve, reject)=> {
    sql.query(`SELECT * FROM rates`, (err, rows, fields) => {
      if(!!err) reject(err);
      else resolve(rows[0]);
    });
  });
};

module.exports = Rate;
