const { model } = require("mongoose");
const StaffInformation = require("../models/staffInformation");

module.exports = (req,res) => {
    let id = req.body.id;
    // Tìm tất cả các id của nhân viên 
    StaffInformation.find((err,staffInfo) => {
        (err) => {
            res.redirect("/createMember");
        }
        // check id có tồn tại hay không 
        let check = false;
        for (let i = 0; i <  staffInfo.length; i++) {
            if (id == staffInfo[i]._id){
                console.log(id);
                check = true;
            }
        }
        console.log(check);
        // trường hợp id tồn tại sẽ chạy lệnh trong if
        let oldPassword = req.body.oldPassword;
        console.log(oldPassword);
        if ( check == true) {
            StaffInformation.findById(id, function (error, staffInformation) {
                console.log(id);
                // console.log(id);
                (error) => {
                    res.redirect("/createMember");
                }
                let oldPassword = req.body.oldPassword;
                console.log(staffInformation.password);
                console.log(oldPassword);
                console.log(oldPassword == staffInformation.password);
                if (oldPassword == staffInformation.password){
                    let newPassword = req.body.newPassword;
                    switch (newPassword) {
                        case "":
                            newPassword = staffInformation.password;
                            break;
                        case null:
                            newPassword = staffInformation.password;
                            break;
                    }
                    if (newPassword !== oldPassword){
                        StaffInformation.findByIdAndUpdate( 
                            id,
                            {
                                password: newPassword,
                            },
                            {new: true},
                            ( err, staffInfo ) => {
                                (err) => {
                                    model.redirect("/createMember");
                                }
                                console.log("updating");
                                res.redirect("/createMember")
                            }
                        )
                    } else if (newPassword === oldPassword){
                        console.log("New password same the old password");
                    }
                    // truong hop old password wrong
                    else {
                        console.log("old password wrong");
                    }
                } 
            })
        }
        // trường hợp nhập sai id
        else {
            res.redirect("/createMember");
            console.log("id not exist!");
        }
    })
}