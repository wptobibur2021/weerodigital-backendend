const Delears = require("../model/dealers");

// Dealer create services below
exports.createDealerServices = async(data) =>{
	const result = await Delears.create(data);
	return result;
};

// Dealer get services below 
exports.getAllDealerServices = async() =>{
	const result = await Delears.find({});
	return result;
};

// Dealer delete by ID
exports.dealerDeleteByIdServices = async (id) =>{
	const result = await Delears.deleteOne({_id: id});
	return result;
};