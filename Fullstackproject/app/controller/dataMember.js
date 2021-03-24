const { response } = require("express");
const { model } = require("mongoose");
const StaffInformation = require("../models/staffInformation");

module.exports = (req, res) => {
    res.render("./dataMember")
    console.log("Reading!!");
    StaffInformation.find({}, function (error, members) {
        (error) => {
            res.redirect("/createMember")
        }
        console.log(members);
    })
    
}
