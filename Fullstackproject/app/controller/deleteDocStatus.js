const Status = require("../models/status");

module.exports = (req,res) => {
    console.log(req.body.id);
    let id = req.body.id
    Status.findByIdAndDelete( id,( error, status ) => {
        console.log( error, status );
    })
}