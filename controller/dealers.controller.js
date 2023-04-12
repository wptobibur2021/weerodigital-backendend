const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");
const { createDealerServices, getAllDealerServices, dealerDeleteByIdServices } = require("../services/dealers.services");
const dealers = require("../model/dealers");

// Dealer create function declaration below
exports.createDealer = async (req,res)=>{
	try{
		const pass = req.body.password;
		const salt = await bcrypt.genSalt(10);
		const hashedPass = await bcrypt.hash(pass, salt);
		const userData = {
			...req.body,
			password: hashedPass
		};
		const result = await createDealerServices(userData);
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

// Dealer get function declaration below
exports.getAllDealer = async(req,res)=>{
	try{
		const result = await getAllDealerServices();
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

// Dealer Delete
exports.dealerDeleteById = async(req, res) => {
	try{
		const {id} = req.params;
		const result = await dealerDeleteByIdServices(id);
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

// Dealer login function declaraation below
exports.dealerLogin = async(req,res)=>{
	try{
		const {mobileNo, password} = req.body;
		const dealer = await dealers.findOne({mobileNo});
		if(!dealer){
			return await res.status(500).json({
				error: "Dealer Not Found",
			});
		}
		const validPass = await bcrypt.compare(password, dealer.password);
		if (!validPass) {
			return await res.status(500).json({
				message: "Wrong Password",
			});
		}
		if (dealer && validPass) {
			const jwtToken = jwt.sign(
				{
					fullName: dealer._doc.fullName,
					mobileNo: dealer._doc.mobileNo,
				},
				process.env.JWT_KEY,
				{ expiresIn: "3h" },
			);
			const { password, ...others } = dealer._doc;
			await res.status(200).json({
				status: "success",
				data: others,
				token: jwtToken,
				error: null,
			});
		}
	}catch(e){
		await res.status(500).json({
			status: "error",
			data: null,
			error: err.message,
		});
	}
};