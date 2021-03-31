const { response } = require("express");
const { model } = require("mongoose");
const StaffInformation = require("../models/staffInformation");

module.exports = (req, res) => {
    StaffInformation.find({}, function (error, members) {
        if (error) {
            console.log("read data fail!");
            return res.redirect("/createMember")
        }
        console.log(members);
    })
    res.redirect("/createMember")
    
}
