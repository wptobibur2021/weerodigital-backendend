const express = require("express");

const invoiceController = require("../../controller/invoice.controller");
const router =  express.Router();
router
	.route("/")
	.post(invoiceController.createInvoice)
	.get(invoiceController.getAllInvoice);
    
// Single route
router
	.route("/:id")
	.delete(invoiceController.invoiceDeleteById);

module.exports = router;