const StaffInformation = require("../models/staffInformation");

module.exports = (req,res) => {
    console.log(req.body.id);
    let id = req.body.id
    StaffInformation.findByIdAndDelete( id,( error, staffInfo ) => {
        console.log( error, staffInfo );
    })
}