const Table = require("../models/tableOfWorks");

module.exports = (req,res) => {
    console.log(req.body.id);
    let id = req.body.idForDel
    Table.findByIdAndDelete( id,( error, table ) => {
        console.log( error, table );
    })
}