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
        // db.penguins.findById().forEach(function (doc) {
        //   d = doc._id.getTimestamp();
        //   console.log(
        //     d.getFullYear() +
        //       "-" +
        //       (d.getMonth() + 1) +
        //       "-" +
        //       d.getDate() +
        //       " " +
        //       d.getHours() +
        //       ":" +
        //       d.getMinutes() +
        //       ":" +
        //       d.getSeconds()
        //   );
        // });
// 2014-12-23 3:4:41
// 2014-12-23 3:4:53
        let caculationTime = status.timeEnd - status.timeStart;
        let seconds = Math.floor(caculationTime/1000);
        let minutes = Math.floor(seconds/60);
        let hours = Math.floor(minutes/60);
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
                console.log(status);
                console.log("Update time keeping success!");
                res.redirect("/createMember")
            }
        )
    })
}