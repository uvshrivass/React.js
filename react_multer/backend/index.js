const express = require('express')
const app = express();
const path = require("path");
const multer = require("multer");
const port = 8000;

const storage = multer.diskStorage({
   destination: "./uploads/",
   filename: function(req, file, cb){
      cb(null,"IMAGE-" + Date.now() + path.extname(file.originalname));
   }
});

const upload = multer({
   storage: storage,
   limits:{fileSize: 1000000},
}).single("myImage");


app.post("/upload", function(req,res) {
   upload(req, res, function (err) {
      console.log("Request ---", req.body);
      console.log("Request file ---", req.file);//Here you get file.
      /*Now do where ever you want to do*/
      if(err){
          throw(err)
      }
      else{
        return res.send(200).end();
      }
         
   });
});


app.listen(port,() => {
   console.log("Serving at 8000 port")
});

