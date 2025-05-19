import mongoose from "mongoose";
import dotenv from "dotenv"


dotenv.config()

if(!process.env.MONGODB_URI)
{
    throw Error("Please provide mondodb URI in the .env file")
}
async function connectDB()
{
try {
    await mongoose.connect(process.env.MONGODB_URI)
    console.log("Database is Connected Successfully.....")
    
} catch (error) {
    console.log("Not Connected to the database",error)
    
}
}

export default connectDB;
