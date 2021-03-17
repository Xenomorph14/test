const StaffInformation = require ("../models/staffInformation");
const { formatUserInfo } = require( "../utils/formatUserInfo" );

module.exports = (req, res) => {
    let id = req.body.idForQuery;
    StaffInformation.findById(id,(error,staffInfo) => {
        console.log(formatUserInfo(staffInfo._id, staffInfo.name, staffInfo.birthday ,staffInfo.department));
    })
}