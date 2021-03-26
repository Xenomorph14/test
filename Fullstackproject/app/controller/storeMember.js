const StaffInformation = require ("../models/staffInformation")
const Status = require( "../models/status" )
const TableOfWork = require ("../models/tableOfWorks")
const bcrypt = require("bcrypt")

module.exports = async (req, res) => {
    try {
        let password = await bcrypt.hash(req.body.password, 10)
        req.body.password = password;
        StaffInformation.create(req.body, (error, staffinfo) => {
            if(error) {
                console.log("cannot create");
                return res.redirect("./createMember")
            }  else{
                console.log("Create success!!");
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
    } catch {
        console.log("Something wrong");
    }
}
