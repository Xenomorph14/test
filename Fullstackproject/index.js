if (process.env.NODE_ENV !== "production") {
    require("dotenv").config()
}
const express = require ("express");
const app = express();
const db = require("./config/db")
const jwt  = require("jsonwebtoken")
// app.use(express.json())
const flash = require("express-flash")
const session = require("express-session")
const passport = require("passport")
const methodOverride = require("method-override")
const  initializePassport  = require ("./passport-config")
initializePassport(
    passport,
    uname  =>  admins.find(admin  =>  admin.uname  ===  uname),
    id  =>  admins.find(admin  =>  admin.id  ===  id)
)



//Set view engine
// const ejs = require("ejs")
app.set("view engine","ejs")

//Parser 
const bodyParser=require("body-parser");
app.use(express.urlencoded({ extended: false }));
// app.use(bodyParser.json())
// app.use(bodyParser.raw());
app.use(flash())
app.use(session({ 
    secret:  process.env.SESSION_SECRET,
    resave: false,
    saveUninitialized: false
 }))

 app.use(passport.initialize())
 app.use(passport.session())
 app.use(methodOverride("_method"))

//Connect Db
db.connect();



const admins = [
    {
        id : "123123",
        uname : "admin",
        psw : "admin"
    }
]
//Controller
// const loginAdmin = require("./app/controller/loginAdmin")
const home = require("./app/controller/home")
const create = require("./app/controller/createMember")
const storeMember = require("./app/controller/storeMember")
// const storeStatus = require("./app/controller/storeStatus")
// const storeTable = require("./app/controller/storeTable");
const deleteDocStaff = require("./app/controller/deleteDocStaff");
const deleteDocStatus = require("./app/controller/deleteDocStatus");
const deleteDocTable = require("./app/controller/deleteDocTable");
const queryUserInfo = require("./app/controller/queryUserInfo")
const sumary = require("./app/controller/sumary");
const checkAuthenticated = require("./middleware/checkAuthenticated")
const checkNotAuthenticated = require("./middleware/checkNotAuthenticated")
const logout = require("./app/controller/logout")

app.get("/", checkNotAuthenticated , home)
app.get("/createMember",checkAuthenticated,  create)
app.post("/login", checkNotAuthenticated,  passport.authenticate("local", {
    successRedirect: "/createMember",
    failureRedirect: "/",
    failureFlash: true
}) )
app.post("/storeMember", storeMember)
// app.post("/storeStatus", storeStatus)
// app.post("/storeTable", storeTable)
app.post("/deleteDocStaff", deleteDocStaff )
app.post("/deleteDocStatus", deleteDocStatus )
app.post("/deleteDocTable", deleteDocTable )
app.post("/query", queryUserInfo )
app.post ("/sumary", sumary)
app.delete("/logout", logout )

// const posts = [
//     {
//         username : "thang",
//         title : "dep trai"
//     },
//     {
//         username : "nhat",
//         title : "xau trai"
//     }
// ]

// app.get("/posts", authenticateToken, (req, res) => {
//     res.json(posts.filter(post  =>  post.username === req.thang.name))
// })

// app.post("/logintoken", (req,res) => {
//     //Authenticate user
//     const username = req.body.username
//     const user = { name : username }

//     const accessToken = jwt.sign( user, process.env.ACCESS_TOKEN_SECRET )

//     res.json({ accessToken: accessToken })
// })

// function authenticateToken(req,res,next) {

//     const authHeader = req.headers['authorization']
//     console.log(authHeader);
//     const token = authHeader && authHeader.split(" ")[1]
//     console.log(token);
//     if (token == null) return res.sendStatus(401)

//     jwt.verify(token,  process.env.ACCESS_TOKEN_SECRET, (err, user) => {
//         if (err) return res.sendStatus(403) 
//         req.thang = user
//         next()
//     })

// }


app.listen(4000,()=>{
    console.log("App listening on port 4000");
})


