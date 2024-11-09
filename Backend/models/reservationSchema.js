const mongoose = require('mongoose')
const validator = require('validator')

const reservationSchema = new mongoose.Schema({
    firstName:{
        type:String,
        required:true,
        minLength :[3 , "First Name must be contain at least 3 charecters"],
        maxLength : [20 , "First Name cannot exceed 20 Charecters"]
    },
    lastName:{
        type:String,
        required:true,
        minLength :[3 , "Last Name must be contain at least 3 charecters"],
        maxLength : [20 , "Last Name cannot exceed 20 Charecters"]
    },
    email:{
        type:String,
        required:true,
        validator:[validator.isEmail , "Provide a valid email"]
    },
    phone:{
        type:String,
        required:true,
        minLength:[10 , "Phone Number Must Contain only 10 digits"],
        maxLength:[11 , "Phone Number Must Contain only 10 or 11 digits"]
    },
    time:{type:String , required:true},
    date:{type:String , required:true}
    
});

const Reservation = mongoose.model("Reservation" , reservationSchema);

module.exports = Reservation;