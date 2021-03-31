const Status = require("../models/status")

module.exports = (req,res) => {
    // function getLocation() {
    //     if (navigator.geolocation) {
    //       navigator.geolocation.getCurrentPosition(showPosition);
    //     } else { 
    //        console.log("Geolocation is not supported by this browser.");
    //     }
    // }
    // let latitude = position.coords.latitude;
    // let longitude = position.coords.latitude;
    // function distance(lat1, lon1, lat2, lon2) {
    //     var p = 0.017453292519943295;
    //     var c = Math.cos;
    //     var a =
    //         0.5 -
    //         c((lat2 - lat1) * p) / 2 +
    //         (c(lat1 * p) * c(lat2 * p) * (1 - c((lon2 - lon1) * p))) / 2;
    
    //     return 12742 * Math.asin(Math.sqrt(a)) * 1000;
    // }
    // let space = distance(20.998668071354473, 105.84737529126492, 20.99841616331366, 105.84751526879437);
    // if ( space < 300 ){
        let id = req.body.idTimeKeeping;
        Status.findById(id, (err,status)=>{
            if (err){
                console.log("Không tìm thấy id!");
                return res.redirect("/createMember")
            }
            let date = new Date();
            
            // let newDate = date.getDay() + date.getMonth() + date.getFullYear;

            let hours = date.getHours(); 
            let minutes = date.getMinutes();
            let seconds = date.getSeconds();
            if (hours < 10){ hours = `0${hours}` }
            if (minutes < 10){ minutes = `0${minutes}` }
            if (seconds < 10){ seconds = `0${seconds}` }
            let newTimePoint = `${hours}:${minutes}:${seconds}`;

            // lưu status ngày hiện tại vào time line
            Status.findById(id, function (err, time){
                if (err){
                    res.redirect("/createMember");
                    return console.log("Add status data to Table fail!");
                }
                console.log(time.timeLine.length);
                if (time.timeLine.length === 0){
                    Status.findByIdAndUpdate(
                        id,
                        {
                            timeStart: newTimePoint,
                        },
                        {new: true},
                        ( err, status ) => {
                            if (err){
                                res.redirect("/createMember");
                                return console.log("Lỗi update time start");
                            }   
                            console.log("update time start success");
                        }
                    )
                } else {
                    Status.findByIdAndUpdate(
                        id,
                        {
                            timeEnd: newTimePoint,
                        },
                        {new: true},
                        ( err, status ) => {
                            if (err){
                                console.log("err");
                                res.redirect("/createMember");
                                return console.log("Lỗi update time end");
                            }   
                            console.log("update time end success");
                        }
                    )
                }
                console.log(time);
                time.timeLine.push(newTimePoint);
                time.save();
                console.log(time.timeLine.length);
                res.redirect("/createMember");
            })
        })
    // } else {
    //     console.log("Địa điểm chấm công không hợp lệ");
    // }
    
}