const Status = require("../models/status")
const db = require("../../config/db/mongodb");

module.exports = (req,res) => {
    console.log("start");
    // return res.redirect("/createMember")
    let id = req.body.idTimeKeeping;
    Status.findById(id, (err,status)=>{
        if (err){
            console.log("Không tìm thấy id!");
            return res.redirect("/createMember")
        }
        let caculationTime = status.timeEnd - status.timeStart;
        let seconds = Math.floor(caculationTime/1000);
        let minutes = Math.floor(seconds/60);
        let hours = Math.floor(minutes/60);
        minutes = minutes - hours*60;
        seconds = seconds - hours*60*60 - minutes*60;
        Status.findByIdAndUpdate(
            id,
            {
                timeKeeping : `${hours}:${minutes}:${seconds}`,
            },
            {new : true},
            (err,status)=>{
                if(err){
                    console.log("update failed!");
                    return res.redirect("/createMember")
                }
                console.log(status.timeKeeping);
                console.log("Update time keeping success!");
                res.redirect("/createMember")
            }
        )
    })
}