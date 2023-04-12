const { createInvoiceServices, getAllInvoiceServices, invoiceDeleteByIdServices } = require("../services/invoice.servides");


// Product create function declaration below
exports.createInvoice = async (req,res)=>{
	try{
		const result = await createInvoiceServices(req.body);
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

// Invoice get function declaration below
exports.getAllInvoice = async(req,res)=>{
	try{
		const result = await getAllInvoiceServices();
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

// Invoice Delete
exports.invoiceDeleteById = async(req, res) => {
	try{
		const {id} = req.params;
		const result = await invoiceDeleteByIdServices(id);
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