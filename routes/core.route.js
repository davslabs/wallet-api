const express = require('express');
const router = express.Router();
const core = require('../controller/core.controller');

router.get('/health', core.health);

module.exports = router;
