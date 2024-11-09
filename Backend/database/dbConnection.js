const mongoose = require('mongoose')

const dbConnection = ()=>{
    mongoose.connect(process.env.MONGO_URI , {
        dbName:"RESTORANT"
    })
    .then(()=>{
        console.log("Database Connected Successfully!")
    })
    .catch((err)=>{
        console.log(`Something went wrong from database connection ${err}`)
    })
}

module.exports = dbConnection;