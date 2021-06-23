const express = require("express");
const serverless = require("serverless-http");
const mongooseDB = require("mongoose");
const Store=require("../mainModules/store.js")
var bodyParser = require("body-parser");
//Middleware

 const app = express();
 app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

 const router = express.Router();
 const connectDB = async()=>{
  try {
    await mongooseDB.connect("mongodb+srv://marwa:marwa@cluster0.9vo0e.mongodb.net/test", {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    useCreateIndex: true,
    useFindAndModify: false,
  });
  } catch (error) {
    console.log("error when connect to the datebase ",error)
  }}
  connectDB()

router.post("/addattend", (req, res) => {
    try {const record = new Store({
        date:new Date(),
        courseName:req.body.courseName,
        group:req.body.group,
        stage:req.body.stage,
       attendData: req.body.email,
       admin:req.body.admin
      });
      Store.create(record)
        .then((result) => {
          res.status(201).json({
            message: "done with adding",
            data: result,
          });
        })
        .catch((err) => {
          res.status(500).json({
            error: err,
          });
        });
  
  
  }catch {
    console.lgo("somthing worng happend")
  
    }
  
    });
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

  router.get("/getsesstion/:id", (req, res) => {
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
 router.get("/", (req, res) => {
   res.json({
     hello: "hi!"
   });
 });
 router.put("/updateSesstion/:id", (req, res) => {
  try {
    Store.findByIdAndUpdate(req.params.id, {
    $set: { attendData: req.body.email },
    }).then(() => {
    Store.findOne({ _id: req.params.id }).then((data) => {
    res.send(data);
    });
    }).catch((err) => {
    res.status(500).json({
      error: err,
    });
  })

} catch {
  console.lgo("somthing worng happend")

  }

});
  app.use(`/.netlify/functions/api`, router);
 
 module.exports = app;
 module.exports.handler = serverless(app);
 