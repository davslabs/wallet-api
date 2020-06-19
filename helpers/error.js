module.exports = (err, res) => {
    const {statusCode = 500, message } = err;
    res.status(statusCode).json({
        status: 'error',
        statusCode,
        message
    });
};