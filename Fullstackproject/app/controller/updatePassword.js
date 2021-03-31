const StaffInformation = require("../models/staffInformation");
const bcrypt = require("bcrypt");

module.exports = (req,res) => {
    let id = req.body.id;
    let oldPassword = req.body.oldPassword;
    StaffInformation.findById(id, function (error, staffInformation) {
        if (error) {
            res.redirect("/createMember");
            return console.log("error");
        }
        // validate password
        const validate = bcrypt.compareSync(oldPassword, staffInformation.password)
        console.log(validate);
        // link Thamm khảo: "https://jasonwatmore.com/post/2020/07/20/nodejs-hash-and-verify-passwords-with-bcrypt"

        if (validate === true){
            let newPassword = req.body.newPassword;
            // validate newPassword
            switch (newPassword) {
                case "":
                    newPassword = staffInformation.password;
                    break;
                case null:
                    newPassword = staffInformation.password;
                    break;
            }
            // compare newPassWord and oldPassword
            if (newPassword !== oldPassword){
                StaffInformation.findByIdAndUpdate( 
                    id,
                    {
                        password: bcrypt.hashSync(newPassword,10),
                    },
                    {new: true},
                    ( err, staffInfo ) => {
                        if (err) {
                            model.redirect("/createMember");
                        }
                        console.log("success");
                        res.redirect("/createMember")
                    }
                )
            } else if (newPassword === oldPassword){
                res.redirect("/createMember");
                return console.log("Fail: New password same the old password");
            }
        }
        // Trường hợp old password wrong
        else {
            res.redirect("/createMember");
            return console.log("old password wrong");
        }
    })
}