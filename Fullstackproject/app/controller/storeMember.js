
const StaffInformation = require ("../models/staffInformation")


module.exports = (req, res) => {
    // console.log(req.body);
    StaffInformation.create(req.body,(error,staffinfo) => {
        if(error) {
            return res.redirect("./createMember")
        }  
        console.log("Create succes!!");
    })
}
