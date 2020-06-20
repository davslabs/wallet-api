const sql = require('../connection');
const rateType = require('./rateType.model');

class Rate {
    constructor(rates) {
        this.type = rates.type;
        this.value = rates.value;
    }
};

Rate.findAll = result => {
  sql.query(`SELECT * FROM rates`, (err, res) => {       
    if(err) {
      result(null, err);
      return;
    }

    result(null, res);    
  });
};

module.exports = Rate;
