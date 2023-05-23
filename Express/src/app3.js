
const express=require("express");
const moment = require("moment")
const app=express();
const jwt=require("jsonwebtoken")
const port=process.env.port || 3000
const path=require("path");
const bcrypt = require('bcrypt');
const hbs=require("hbs")
const mypublic=path.join(__dirname,"../public");
const mypartials=path.join(__dirname,"../partials");
app.use(express.urlencoded({extended:false}));
app.use(express.static(mypublic));
app.set("view engine","hbs")
hbs.registerPartials(mypartials);
app.get('/', (req, res) => {
  let token = jwt.sign("Theworldisgoingtodie","hithisismonugupta")
  res.cookie(`jwt`,token);
  res.send('Cookie have been saved successfully');
});

app.listen(port,(req,res)=>{
console.log("Running on Port 3000")



})