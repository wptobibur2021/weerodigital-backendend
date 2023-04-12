const Product = require("../model/product");

// Product create services below
exports.createProductServices = async(data) =>{
	const result = await Product.create(data);
	return result;
};

// Product get services below 
exports.getAllProductServices = async() =>{
	const result = await Product.find({}).populate("dealerId");
	return result;
};

// Product delete by ID
exports.productDeleteByIdServices = async (id) =>{
	const result = await Product.deleteOne({_id: id});
	return result;
};