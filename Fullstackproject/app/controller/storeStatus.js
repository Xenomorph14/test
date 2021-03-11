const Status = require ("../models/status")
const StaffInformation = require("../models/staffInformation");
const { isValidObjectId } = require("mongoose");

module.exports = (req, res) => {
    Status.create({
        _id : "604a026e47176249ac4ec3b6"
    }, (error, status) => {
        console.log(error, status);
    })
}
