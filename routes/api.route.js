const express = require('express');
const router = express.Router();

const rateController = require('../controller/rate.controller');
const walletController = require('../controller/wallet.controller');

// RATE ROUTES
router.get('/rates', rateController.findAll);

// WALLET ROUTES
router.get('/wallets', walletController.getAll);
router.get('/wallets/:address/age', walletController.getAge);

module.exports = router;
