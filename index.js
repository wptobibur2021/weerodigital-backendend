require("dotenv").config();
const mongoose = require("mongoose");
const app = require("./app");

// database connection
mongoose.connect(process.env.DB_URL).then(() => {
	console.log("Database connection is successfull");
});
// server
const port = process.env.PORT || 8000;
app.listen(port, ()=>{
	console.log(`Server is now running ${port}`);
});