const Status = require("../models/status")

module.exports = (req,res) => {
    console.log("finish");
    // return res.redirect("/createMember")
    let id = req.body.idTimeFinish;
    Status.findById(id, (err,status)=>{ 
        if (err){
            console.log("Không tìm thấy id!");
            return res.redirect("/createMember")
        }
        let newTimeEnd = Date.now();
        Status.findByIdAndUpdate(
            id,
            {
                timeEnd : newTimeEnd,
            },
            {new : true},
            (err,status)=>{
                if(err){
                    console.log("update failed!");
                    return res.redirect("/createMember")
                }
                console.log(status.timeEnd);
                console.log("Update time finish success!");
                res.redirect("/createMember")
            }
        )
    })
}