const express = require("express");
const router = express.Router();

const rateController = require("../controller/rate.controller");
const walletController = require("../controller/wallet.controller");

// RATE ROUTES
router.get("/rates", rateController.findAll);
router.get("/rate/:currency", rateController.getExchangeRate)
router.put("/rate/:currency", rateController.updateExchangeRate);

// WALLET ROUTES
router.get("/wallets", walletController.getAll);
router.get("/wallet/:address/age", walletController.getAge);
router.get("/wallet/:address/balance", walletController.getBalance);
router.get(
  "/wallet/:address/:currency/balance",
  walletController.getBalanceInCurrency
);

module.exports = router;
