const Status = require("../models/status")

module.exports = (req,res) => {
    console.log("start");
    // return res.redirect("/createMember")
    let id = req.body.idTimeStart;
    Status.findById(id, (err,status)=>{
        if (err){
            console.log("Không tìm thấy id!");
            return res.redirect("/createMember")
        }
        let newTimeStart = Date.now();
        Status.findByIdAndUpdate(
            id,
            {
                timeStart : newTimeStart,
            },
            {new : true},
            (err,status)=>{
                if(err){
                    console.log("update failed!");
                    return res.redirect("/createMember")
                }
                console.log(status.timeStart);
                console.log("Update time start success!");
                res.redirect("/createMember")
            }
        )
    })
}