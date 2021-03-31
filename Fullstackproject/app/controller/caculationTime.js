const Status = require("../models/status")

module.exports = (req,res) => {
    let id = req.body.idCaculation;
    Status.findById(id, (err,status)=>{
        if (err){
            console.log("Không tìm thấy id!");
            return res.redirect("/createMember")
        }
        
        let timeStart = status.timeStart;
        let timeEnd = status.timeEnd;
        
        let hour1 = Number(timeStart.substr(0,2));
        let hour2 = Number(timeEnd.substr(0,2));
        let minute1 = Number(timeStart.substr(3,2));
        let minute2 = Number(timeEnd .substr(3,2));
        let second1 = Number(timeStart.substr(6,2));
        let second2 = Number(timeEnd .substr(6,2));
                
        let time = 0;
        let time1 = hour1*60*60 + minute1*60 + second1;
        let time2 = hour2*60*60 + minute2*60 + second2;
        time = time2 - time1;
        hours = Math.floor(time/3600);
        minutes = Math.floor((time - hours*3600)/60);
        seconds = time - hours*3600 - minutes*60;

        if (hours < 10){
            hours = String("0"+hours);
        }
        if (minutes < 10){
            minutes = String("0"+minutes);
        }
        if (seconds < 10){
            seconds = String("0"+seconds);
        }

        Status.findByIdAndUpdate(
            id,
            {
                timeKeeping : `${hours}:${minutes}:${seconds}`,
            },
            {new : true},
            (err,status) => {
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