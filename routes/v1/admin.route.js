const express = require("express");

const adminController = require("../../controller/admin.controller");
const router =  express.Router();
router
	.route("/")
	.post(adminController.createAdmin);
    
// Login Route
router
	.route("/login")
	.post(adminController.adminLogin);
    
module.exports = router;