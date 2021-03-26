const { model } = require("mongoose");
const StaffInformation = require("../models/staffInformation");

module.exports = (req,res) => {
    let id = req.body.id;
    StaffInformation.findById(id,(error,staffInformation)=>{
                if (error) {
                    res.redirect("/createMember");
                    
                    return console.log("Lỗi rồi baby");
                }

                console.log("success");
                // get input information
                let newEmail = req.body.newEmail;
                let newPassword = req.body.newPassword;
                let newName = req.body.newName;
                let newBirthday = req.body.newBirthday;
                let newPosition = req.body.newPosition;
                let newDepartment = req.body.newDepartm
                // validate input information
                switch (newEmail) {
                    case "":
                        newEmail = staffInformation.email;
                        break;
                    case null:
                        newEmail = staffInformation.email;
                        break;
                }
                switch (newPassword) {
                    case "":
                        newPassword = staffInformation.password;
                        break;
                    case null:
                        newPassword = staffInformation.password;
                        break;
                }
                switch (newName) {
                    case "":
                        newName = staffInformation.name;
                        break;
                    case null:
                        newName = staffInformation.name;
                        break;
                }
                switch (newBirthday) {
                    case "":
                        newBirthday = staffInformation.birthday;
                        break;
                    case null:
                        newBirthday = staffInformation.birthday;
                        break;
                }
                switch (newPosition) {
                    case "":
                        newPosition = staffInformation.position;
                        break;
                    case null:
                        newPosition = staffInformation.position;
                        break;
                }
                switch (newDepartment) {
                    case "":
                        newDepartment = staffInformation.department;
                        break;
                    case null:
                        newDepartment = staffInformation.department;
                        break;
                }
                StaffInformation.findByIdAndUpdate( 
                    id,
                    {
                        email: newEmail,
                        password: newPassword,
                        name: newName,
                        birthday: newBirthday,
                        position: newPosition,
                        department: newDepartment,
                        __v: 0
                    },
                    {new: true},
                    ( err, staffInfo ) => {
                        if(err){
                            model.redirect("/createMember");
                        }
                        console.log(staffInfo);
                        console.log("updating");
                        return res.redirect("/createMember")
                    }
                )   
    })
}