const mongoose = require("mongoose");
const { ObjectId } = mongoose.Schema.Types;
const InvoiceSchema = new mongoose.Schema({
	productId: {
		type: ObjectId,
		ref: "Product",
		require: true,
	},
	dealerId: {
		type: ObjectId,
		ref: "Dealer",
		require: true,
	},
	accNo: {
		type: Number,
		required: [true, "Please provide a account no"],
		trim: true,
		unique: true,
	},
	payOption: {
		type: String,
		required: [true, "Please provide a payment option"],
		trim: true,
	},
	duePayment: {
		type: Number,
		trim: true,
		required: [true, "Please provide a due Payment"],
	},
	proQty: {
		type: Number,
		trim: true,
		required: [true, "Please provide a due Payment"],
	},
	totalAmount: {
		type: Number,
		trim: true,
		required: [true, "Please provide a total Amount"],
	},
	payment: {
		type: Number,
		trim: true,
		required: [true, "Please provide a pay amount"],
	},
	status: {
		type: Number,
		trime: true,
		default: 0
	},
}, {timestamps: true});
module.exports = mongoose.model("Invoice", InvoiceSchema);