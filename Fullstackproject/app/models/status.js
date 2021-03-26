const mongoose = require("mongoose")

const Schema = mongoose.Schema;

const moment = require("moment")

const Status = new Schema({
    timeKeeping : { type:String, default: "" } ,
    timeStart : { type: Date, default : Date.now} ,
    timeEnd : { type:Date, default: Date.now },
})

module.exports = mongoose.model("status",Status)