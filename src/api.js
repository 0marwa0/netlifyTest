const express = require("express");
const serverless = require("serverless-http");
const mongooseDB = require("mongoose");

 
 const app = express();
 const router = express.Router();
 const connectDB = async()=>{
  try {
    await mongoose.connect("mongodb+srv://marwa:marwa@cluster0.9vo0e.mongodb.net/test", {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    useCreateIndex: true,
    useFindAndModify: false,
  });
  } catch (error) {
    console.log("error when connect to the datebase ",error)
  }}
  connectDB()
 router.get("/", (req, res) => {
   res.json({
     hello: "hi!"
   });
 });
 
 app.use(`/.netlify/functions/api`, router);
 
 module.exports = app;
 module.exports.handler = serverless(app);
 