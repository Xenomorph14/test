const { model } = require("mongoose");
const Status = require("../models/status");
const tableOfWorks = require("../models/tableOfWorks");

module.exports = (req,res) => {
    // task id from form clear status data at createMember.js
    let id = req.body.idClearStatus;
    // Find id 
    Status.findById(id, function (error, status) {
        // callback khi lỗi
        if (error){
            res.redirect("/createMember");
            return console.log("Clear status data fail!");
        }
        // Lưu dữ liệu status của ngày trước khi reset lại bằng biến saveStatus 
        console.log(status);
        let date = new Date();
        let newDate = String(date.getDate()) + "-" + String(date.getMonth()+1) + "-" + String(date.getFullYear());
        let saveStatus = {
            timeStart : status.timeStart,
            timeEnd : status.timeEnd,
            statusDay : 0,
            Date : newDate
        }
        

        console.log("success");
        // lưu status ngày hiện tại vào table_of_works 
        tableOfWorks.findById(id, function (err, table){
            if (err){
                res.redirect("/createMember");
                return console.log("Add status data to Table fail!");
            }
            table.dateDetails.push(saveStatus);
            table.save();
        })
        // clear data trong ngày
        Status.findByIdAndUpdate( 
            id,
            {
                timeKeeping: null,
                timeStart: null,
                timeEnd: null,
                timeLine: []
            },
            {new: true},
            ( err, status ) => {
                if (err){
                    res.redirect("/createMember");
                    return console.log("Lỗi update status");
                }
                console.log(status);
                console.log("clear status success ");
                res.redirect("/createMember")
            }
        )   
    })
}