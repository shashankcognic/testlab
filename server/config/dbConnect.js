const mongoose = require('mongoose');

const dbConnect = async()=>{
    try {
        await mongoose.connect(process.env.MONGODB_URI)
        .then((db)=>{
            console.log("Database Connected Successfully");
            return db;
        })
       
    } catch (error) {
        console.log(`Error : ${error}`);        
    }
}

module.exports = dbConnect;