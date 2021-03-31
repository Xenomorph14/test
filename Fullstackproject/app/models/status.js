const mongoose = require("mongoose")

const Schema = mongoose.Schema;

const moment = require("moment")

const Status = new Schema({
    timeKeeping : { type:String, default: "" } ,
    timeStart : { type:String, default: "" } ,
    timeEnd :  { type:String, default: "" },
    timeLine : []
})

module.exports = mongoose.model("status",Status)