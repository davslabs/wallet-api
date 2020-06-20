const express = require('express');
const router = express.Router();
const rate = require('../controller/rate.controller');

router.get('/rates', rate.findAll);

module.exports = router;
