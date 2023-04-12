const { createProductServices, getAllProductServices, productDeleteByIdServices } = require("../services/product.servides");

// Product create function declaration below
exports.createProduct = async (req,res)=>{
	try{
		const result = await createProductServices(req.body);
		await res.status(200).json({
			status: "success",
			data: result,
			error: null
		});
	}catch(err){
		await res.status(500).json({
			status: "error",
			data: null,
			error: err.message,
		});
	}
};

// Product get function declaration below
exports.getAllProduct = async(req,res)=>{
	try{
		const result = await getAllProductServices();
		await res.status(200).json({
			status: "success",
			data: result,
			error: null
		});
	}catch(err){
		await res.status(500).json({
			status: "error",
			data: null,
			error: err.message,
		});
	}
};

// Product Delete
exports.productDeleteById = async(req, res) => {
	try{
		const {id} = req.params;
		console.log("ID: ", id);
		const result = await productDeleteByIdServices(id);
		await res.status(200).json({
			status: "success",
			data: result,
			error: null
		});
	}catch(err){
		await res.status(500).json({
			status: "error",
			data: null,
			error: err.message,
		});
	}
};