const mongoose = require("mongoose");
mongoose.set('useFindAndModify', false);
async function connect() {
    try{
        await mongoose.connect("mongodb://localhost:27017/test_db",{

            useNewUrlParser:true,
            useUnifiedTopology:true

        });
        console.log("Connect succesfully!!");
    } catch(error) {
        console.log("Connect failure!!!!");
    }
}
module.exports = {connect};