const httpError = require('http-errors');

exports.health = (req, res, next) => {
    const healthCheck = {
        status: 'UP', 
        timestamp: Date.now(), 
        uptime: process.uptime()
    };

    try {        
        res.status(200).json(healthCheck);
    } catch(err) {
        next(httpError(503, err));
    }
};
