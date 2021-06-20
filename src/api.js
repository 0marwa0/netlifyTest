const express = require("express");
const serverless = require("serverless-http");
// const mongoose = require("mongoose");
// const Store = require("./mainModules/store");

const app = express();
//const router = express.Router();

// const connectDB = async()=>{
//   try {
//     await mongoose.connect("mongodb+srv://marwa:marwa@cluster0.9vo0e.mongodb.net/test", {
//     useNewUrlParser: true,
//     useUnifiedTopology: true,
//     useCreateIndex: true,
//     useFindAndModify: false,
//   });
//   } catch (error) {
//     console.log("error when connect to the datebase ",error)
//   }}
//   connectDB()
//   app.post("/addattend", (req, res) => {
      
  
//     try {const record = new Store({
//         date:new Date(),
//         courseName:req.body.courseName,
//         group:req.body.group,
//         stage:req.body.stage,
//        attendData: [req.body.email],
//        admin:req.body.admin
//       });
//       Store.create(record)
//         .then((result) => {
//           res.status(201).json({
//             message: "done with adding",
//             data: result,
//           });
//         })
//         .catch((err) => {
//           res.status(500).json({
//             error: err,
//           });
//         });
  
  
//   }catch {
//     console.lgo("somthing worng happend")
  
//     }
  
//     });
  
//   app.use("/public", experss.static("public"));
  
//   // GET REQUEST
//   app.get("/getSesstion/:id", (req, res) => {console.log(req.params.id)
//     try {Store.findById(req.params.id)
//   .then((data) => {
//   res.send(data);
//     }) .catch((err) => {
//       res.status(500).json({
//         error: err,
//       });
//     });
  
      
//     } catch {
//       console.lgo("somthing worng happend")
    
//       }
//   });
  
//   app.put("/updateSesstion/:id", (req, res) => {
//     try {
      
//    Store.findByIdAndUpdate(req.params.id, {
//       $set: { attendData: req.body.email },
//     }).then(() => {
//       Store.findOne({ _id: req.params.id }).then((data) => {
//         res.send(data);
//       });
//     }).catch((err) => {
//       res.status(500).json({
//         error: err,
//       });
//     })
  
//   } catch {
//     console.lgo("somthing worng happend")
  
//     }
  
//   });

// // app.use(`/.netlify/functions/api`, router);

// module.exports = app;
// module.exports.handler = serverless(app);







// const express = require("express");
// const serverless = require("serverless-http");

//const app = express();
const router = express.Router();

router.get("/", (req, res) => {
  res.json({
    hello: "hi!"
  });
});

app.use(`/.netlify/functions/api`, router);

module.exports = app;
module.exports.handler = serverless(app);

