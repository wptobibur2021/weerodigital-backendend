const Invoice = require("../model/invoice");

// Invoice create services below
exports.createInvoiceServices = async(data) =>{
	const result = await Invoice.create(data);
	return result;
};

// Invoice get services below 
exports.getAllInvoiceServices = async() =>{
	const result = await Invoice.find({}).populate(["dealerId", "productId"]);
	return result;
};

// Invoice delete by ID
exports.invoiceDeleteByIdServices = async (id) =>{
	const result = await Invoice.deleteOne({_id: id});
	return result;
};