const express=require("express")
const mongoose= require("mongoose")
const userRoutes=require('./route/User')
const cors=require('cors')

const app =express()
const PORT=5001

app.use(cors());

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use('/api/user',userRoutes);

app.listen(PORT,()=>{
    console.log(`server listening on port ${PORT}`)
})

const mongConnection=async()=>{
    try{
        await mongoose.connect("mongodb://127.0.0.1:27017/mongPractical")
        console.log("connected to database")
    }
    catch(error){
        console.log("error in connecting DB:",error)
    }
}
mongConnection()
