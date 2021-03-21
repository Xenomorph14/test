const { response } = require("express");
const { model } = require("mongoose");
const StaffInformation = require("../models/staffInformation");

module.exports = (req, res) => {
    // console.log(req.body);
    // StaffInformation.create(req.body,(error,staffinfo) => {
    //     if(error) {
    //         return res.redirect("./createMember")
    //     }
    //     console.log(db.getCollection('staff_information ').find({}));
    
    // })
    res.render("./dataMember")
    console.log("Reading!!");
    StaffInformation.find({}, function (error, members) {
        (error) => {
            res.redirect("/createMember")
        }
        console.log(members);
        // res.render("data", {
        //     staffIformations: staffInfors,
        // })
    })
    
}
