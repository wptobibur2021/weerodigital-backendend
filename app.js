const express = require("express");

const bodyParser = require("body-parser");
const app = express();
const cors = require("cors");

// Midileware
app.use(express.json());
app.use(cors());
app.use(bodyParser.json());

// Routes 
const dealerRoute = require("./routes/v1/dealers.route");
const productRoute = require("./routes/v1/product.route");
const invoiceRoute = require("./routes/v1/invoice.route");
const adminRoute = require("./routes/v1/admin.route");
app.use("/api/v1/dealer", dealerRoute);
app.use("/api/v1/product", productRoute);
app.use("/api/v1/invoice", invoiceRoute);
app.use("/api/v1/admin", adminRoute);

app.get("/", (req,res)=>{
	res.send("Route is Working");
});
module.exports = app;