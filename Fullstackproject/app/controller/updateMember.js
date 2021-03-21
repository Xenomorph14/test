const { model } = require("mongoose");
const StaffInformation = require("../models/staffInformation");

module.exports = (req,res) => {
    let id = req.body.id;
    StaffInformation.find((err,staffInfo) => {
        (err) => {
            res.redirect("/createMember");
        }
        let check = false;
        for (let i = 0; i <  staffInfo.length; i++) {
            if (id == staffInfo[i]._id){
                check = true;
            }
        }
        console.log(check);
        if ( check == true) {
            StaffInformation.findById(id, function (error, staffIformation) {
                // console.log(id);
                (error) => {
                    res.redirect("/createMember");
                }
                console.log("success");
                let newName = req.body.newName;
                let newBirthday = req.body.newBirthday;
                let newPosition = req.body.newPosition;
                let newDepartment = req.body.newDepartment;
                switch (newName) {
                    case "":
                        newName = staffIformation.name;
                        break;
                    case null:
                        newName = staffIformation.name;
                        break;
                }
                switch (newBirthday) {
                    case "":
                        newBirthday = staffIformation.birthday;
                        break;
                    case null:
                        newBirthday = staffIformation.birthday;
                        break;
                }
                switch (newPosition) {
                    case "":
                        newPosition = staffIformation.position;
                        break;
                    case null:
                        newPosition = staffIformation.position;
                        break;
                }
                switch (newDepartment) {
                    case "":
                        newDepartment = staffIformation.department;
                        break;
                    case null:
                        newDepartment = staffIformation.department;
                        break;
                }
                StaffInformation.findByIdAndUpdate( 
                    id,
                    {
                        name: newName,
                        birthday: newBirthday,
                        position: newPosition,
                        department: newDepartment,
                        __v: 0
                    },
                    {new: true},
                    ( err, staffInfo ) => {
                        (err) => {
                            model.redirect("/createMember");
                        }
                        console.log("updating");
                        // res.redirect("/createMember");
                        res.redirect("/createMember")
                    }
                )   
            })   
        } else {
            res.redirect("/createMember");
            console.log("Lỗi rồi baby");
        }
    }) 
}