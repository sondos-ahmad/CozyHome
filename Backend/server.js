const dotenv = require("dotenv").config();
const express = require("express");
const mongoose = require("mongoose");
const bodyParser = require("body-parser");
const cors = require("cors");
const userRoute = require("./Routes/userRoutes")
const errorHandler = require("./middleware/errorMiddleware")
const cookieParser = require("cookie-parser");
const productRoute = require("./routes/productRoute");
const path = require("path");
const app = express();

//Middleware
app.use(express.json());
app.use(cookieParser());
app.use(express.urlencoded({extended:false}));
app.use(bodyParser.json());

//RoutesMiddleware

app.use("/api/users",userRoute);
app.use("/api/products", productRoute);

//Routes
app.get("/",(req,res)=>{
    res.send("Home page");
});

//Error Middleware
app.use(errorHandler);

//connect to DB
const PORT = process.env.PORT || 5000;

mongoose.connect(process.env.MONGO_URL).then(()=>{
    app.listen(PORT,()=>console.log(`Server Port:${PORT}`))
}).catch((error)=>{
    console.log(`${error} didnot connect`)
});



