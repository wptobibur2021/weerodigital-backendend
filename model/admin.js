const mongoose = require("mongoose");

const AdminSchema = new mongoose.Schema({
	fullName: {
		type: String,
		required: [true, "Please provide a full name"],
		trim: true,
		lowercase: true,
	},
	password: {
		type: String,
		required: [true, "Please provide a password"],
		trim: true
	},
	mobileNo: {
		type: Number,
		trim: true,
		required: [true, "Please provide a Mobile Number"],
	},
	status: {
		type: Number,
		trime: true,
		default: 0
	},
}, {timestamps: true});
module.exports = mongoose.model("Admin", AdminSchema);