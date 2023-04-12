const mongoose = require("mongoose");

const DelearsSchema = new mongoose.Schema({
	fullName: {
		type: String,
		required: [true, "Please provide a full name"],
		trim: true,
		lowercase: true,
	},
	address: {
		type: String,
		required: [true, "Please provide a full address"],
		trim: true,
	},
	password: {
		type: String,
		required: [true, "Please provide a password"],
		trim: true
	},
	accNo: {
		type: Number,
		required: [true, "Please provide a account no"],
		trim: true,
		unique: true,
	},
	bankName: {
		type: String,
		required: [true, "Please provide a bank name"],
		trim: true,
	},
	mobileNo: {
		type: Number,
		trim: true,
		required: [true, "Please provide a Mobile Number"],
		unique: true,
	},
	nidNo: {
		type: Number,
		trim: true,
		required: [true, "Please provide a NID Number"],
		unique: true,
	},
	photo: {
		type: String,
		trim: true,
		required: [true, "Please provide a photo"]
	},
	shopName: {
		type: String,
		trim: true,
		required: [true, "Please provide a Shop name"],
		unique: true,
	},
	shopAddress: {
		type: String,
		trim: true,
		required: [true, "Please provide a Shop address"]
	},
	status: {
		type: Number,
		trime: true,
		default: 0
	},
}, {timestamps: true});
module.exports = mongoose.model("Dealer", DelearsSchema);