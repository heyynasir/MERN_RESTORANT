const express = require('express')
const app = express()
const dotenv = require('dotenv')
dotenv.config()
const dbConnection = require('./database/dbConnection')

const cors = require('cors')
const Reservation = require('./models/reservationSchema')

app.use(cors())
app.use(express.json())
app.use(express.urlencoded({extended:true}))


app.post('/add' , async (req,res)=>{
    const {firstName , lastName , email , phone , date , time} = req.body;
    if(!firstName || !lastName || !email || !phone || !date || !time){
        res.send("ggg")
    }
    try{
        const data = await Reservation.create({
            firstName,lastName,email,phone,date,time
        })
        console.log(data)
        res.json({
            success:true,
            message:"Reservation Sent Successfyully"
        })
    }catch(err){
        console.log(err)
    }
})

dbConnection()
// app.use(errorMiddleware)

app.get("/" , (req,res)=>{
    res.send("heyy")
})

app.get("/read" , async (req,res)=>{
    try{
        const read = await Reservation.find()
        // console.log(read)
        res.send(read)
    }catch(err){
        console.log(err)
    }
})

app.listen(process.env.PORT)