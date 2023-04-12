const mongoose = require("mongoose");
const { ObjectId } = mongoose.Schema.Types;
const ProductSchema = new mongoose.Schema({
	proName: {
		type: String,
		required: [true, "Please provide a full name"],
		trim: true,
		lowercase: true,
	},
	dealerId: {
		type: ObjectId,
		ref: "Dealer",
		require: true,
	},
	catName: {
		type: String,
		required: [true, "Please provide a full address"],
		trim: true,
	},
	brandName: {
		type: String,
		required: [true, "Please provide a password"],
		trim: true
	},
	proPrice: {
		type: Number,
		required: [true, "Please provide a account no"],
		trim: true,
	},
	proQty: {
		type: Number,
		required: [true, "Please provide a bank name"],
		trim: true,
	},
	photo: {
		type: String,
		trim: true,
		required: [true, "Please provide a photo"]
	},
	status: {
		type: Number,
		trime: true,
		default: 0
	},
}, {timestamps: true});
module.exports = mongoose.model("Product", ProductSchema);