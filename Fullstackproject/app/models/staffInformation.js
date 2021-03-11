const mongoose = require("mongoose")

const Schema = mongoose.Schema ;

const StaffInformation  = new Schema({
    name : {type : String , required : true},
    birthday : {type : Date, required : true, default :Date.now},
    position : {type : String, required : true},
    department : {type : String, required : true}
});


module.exports = mongoose.model("Staff_information ",StaffInformation)