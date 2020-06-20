const Rate = require('../database/models/rate.model');

exports.findAll = async () => {
    return await Rate.findAll();    
};
