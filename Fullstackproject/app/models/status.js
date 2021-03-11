const mongoose = require("mongoose")

const Schema = mongoose.Schema;

const Status = new Schema({
    timeKeeping : { type:Number, default:"" } ,
    timeStart : { type:Date, default:"" } ,
    timeEnd : { type:Date, default:"" },
})

module.exports = mongoose.model("status",Status)