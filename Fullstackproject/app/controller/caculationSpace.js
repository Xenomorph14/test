const Status = require("../models/status")

module.exports = (req,res) => {
    function getLocation() {
        if (navigator.geolocation) {
          navigator.geolocation.getCurrentPosition(showPosition);
        } else { 
           console.log("Geolocation is not supported by this browser.");
        }
    }
    let latitude = position.coords.latitude;
    let longitude = position.coords.latitude;
    function distance(lat1, lon1, lat2, lon2) {
        var p = 0.017453292519943295;
        var c = Math.cos;
        var a =
            0.5 -
            c((lat2 - lat1) * p) / 2 +
            (c(lat1 * p) * c(lat2 * p) * (1 - c((lon2 - lon1) * p))) / 2;
    
        return 12742 * Math.asin(Math.sqrt(a)) * 1000;
    }
    let space = distance(latitude, longitude, 20.99841616331366, 105.84751526879437);
    console.log(space);
    res.redirect("/createMember")
}