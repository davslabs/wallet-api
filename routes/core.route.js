const express = require('express');
const router = express.Router();
const coreController = require('../controller/core.controller');

router.get('/health', coreController.health);

module.exports = router;
