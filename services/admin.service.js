const Admin = require("../model/admin");


// Admin create services below
exports.createAdminServices = async(data) =>{
	const result = await Admin.create(data);
	return result;
};
