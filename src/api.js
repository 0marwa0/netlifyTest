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


router.get("/getall", (req, res) => {
    // res.json({
    //        hello: "hi!"
    //      });
    try {Store.find()
  .then((data) => {
  res.send(data);
    }) .catch((err) => {
      res.status(500).json({
        error: err,
      });
    });
    } catch {
      console.lgo("somthing worng happend")
      }
  });

  app.get("/getsesstion", (req, res) => {console.log(req.params.id)
    try {Store.findById(req.params.id)
  .then((data) => {
  res.send(data);
    }) .catch((err) => {
      res.status(500).json({
        error: err,
      });
    });
    } catch {
      console.lgo("somthing worng happend")
      }
  });
//  router.get("/", (req, res) => {
//    res.json({
//      hello: "hi!"
//    });
//  });
 
  app.use(`/.netlify/functions/api`, router);
 
 module.exports = app;
 module.exports.handler = serverless(app);
 