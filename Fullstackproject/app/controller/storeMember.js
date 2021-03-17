
const StaffInformation = require ("../models/staffInformation")
const Status = require( "../models/status" )
const TableOfWork = require ("../models/tableOfWork")
const bcrypt = require("bcrypt")

module.exports = async (req, res) => {
    // console.log(req.body);
    try {

        req.body.password = await bcrypt.hash(req.body.password, 10)
        console.log(req.body);
        StaffInformation.create(req.body, (error, staffinfo) => {
            if(error) {
                console.log("cannot create");
                return res.redirect("./createMember")
            }  else{
                console.log("Create succes!!");
                res.redirect("./createMember")
                console.log(staffinfo._id);
    
                //Create status
               Status.create({
                   _id:staffinfo._id},(err,status) => {
                       console.log(err,status);
                   })
    
                //Create table
                TableOfWork.create({
                    _id :staffinfo._id,
                        dateDetails:{
                    }
                },(err,table) => {
                    console.log(err,table);
                })
    
            }
        })
    }catch{
        console.log(" Something wrong");
    }
    
}
