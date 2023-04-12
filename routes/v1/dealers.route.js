const express = require("express");

const dealersController = require("../../controller/dealers.controller");
const router =  express.Router();
router
	.route("/")
	.post(dealersController.createDealer)
	.get(dealersController.getAllDealer);
    
// Login Route
router
	.route("/login")
	.post(dealersController.dealerLogin);
// Single route
router
	.route("/:id")
	.delete(dealersController.dealerDeleteById);

module.exports = router;