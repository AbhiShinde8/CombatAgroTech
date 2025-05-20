import jwt from "jsonwebtoken"
const generateAccessToken= async (userId)=>
{
    const token=  await jwt.sign({id:userId})
    // process.env.SEC

}