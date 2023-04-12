const express = require("express");
const router =  express.Router();
const productController = require("../../controller/product.controller");
router
	.route("/")
	.get(productController.getAllProduct)
	.post(productController.createProduct);
    
// Single route
router
	.route("/:id")
	.delete(productController.productDeleteById);
module.exports = router;