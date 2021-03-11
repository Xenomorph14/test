const mongoose = require("mongoose")

const Schema = mongoose.Schema;

const TableOfWork = new Schema({
    dateDetails : {
        date : { type:Date, default:"" },
        timeStart : { type:Date, default:"" },
        timeEnd : { type:Date, default:"" },
        statusDay : String
    }

})

module.exports = mongoose.model("table_of_work",TableOfWork)