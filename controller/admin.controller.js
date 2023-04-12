const Admin = require("../model/admin");
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");
const { createAdminServices } = require("../services/admin.service");


// Admin create function declaration below
exports.createAdmin = async (req,res)=>{
	try{
		const pass = req.body.password;
		const salt = await bcrypt.genSalt(10);
		const hashedPass = await bcrypt.hash(pass, salt);
		const userData = {
			...req.body,
			password: hashedPass
		};
		const result = await createAdminServices(userData);
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


// Admin login function declaraation below
exports.adminLogin = async(req,res)=>{
	try{
		const {mobileNo, password} = req.body;
		const admin = await Admin.findOne({mobileNo});
		if(!admin){
			return await res.status(500).json({
				error: "Admin Not Found",
			});
		}
		const validPass = await bcrypt.compare(password, admin.password);
		if (!validPass) {
			return await res.status(500).json({
				error: "Wrong Password",
			});
		}
		if (admin && validPass) {
			const jwtToken = jwt.sign(
				{
					fullName: admin._doc.fullName,
					mobileNo: admin._doc.mobileNo,
				},
				process.env.JWT_KEY,
				{ expiresIn: "3h" },
			);
			const { password, ...others } = admin._doc;
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