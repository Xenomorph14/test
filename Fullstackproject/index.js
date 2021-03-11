const express = require ("express");

const app = express();

const db = require("./config/db")

const ejs = require("ejs")

//Set view engine
app.set("view engine","ejs")
app.set("views","views")

//Parser 
const bodyParser=require("body-parser");
app.use(bodyParser.urlencoded({
    extended:true
}));
app.use(bodyParser.json())
app.use(bodyParser.raw());

//Connect Db
db.connect();

//Controller
const loginAdmin = require("./app/controller/loginAdmin")
const home = require("./app/controller/home")
const create = require("./app/controller/createMember")
const storeMember = require("./app/controller/storeMember")
const storeStatus = require("./app/controller/storeStatus")
const storeTable = require("./app/controller/storeTable");
const deleteDocStaff = require("./app/controller/deleteDocStaff");
const deleteDocStatus = require("./app/controller/deleteDocStatus");
const deleteDocTable = require("./app/controller/deleteDocTable");

app.get("/", home)
app.get("/createMember", create)
app.post("/login", loginAdmin)
app.post("/storeMember", storeMember)
app.post("/storeStatus", storeStatus)
app.post("/storeTable", storeTable)
app.post("/deleteDocStaff", deleteDocStaff )
app.post("/deleteDocStatus", deleteDocStatus )
app.post("/deleteDocTable", deleteDocTable )


app.listen(4000,()=>{
    console.log("App listening on port 4000");
})


