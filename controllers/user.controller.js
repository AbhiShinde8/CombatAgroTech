import sendEmail from "../config/sendEmail.js";
import UserModel from "../models/user.model.js"
import bcryptjs from "bcryptjs"
import verifiyEmailTemplet from "../utils/verifiyEmailTemplet.js";

export async function registerUserController(req,res)
{
    try {

        // const {email,password}=req.body;

            // const {name,email,password}=req.body
            const { name, email, password } = req.body || {};


        if(!name || !email || !password)
        {
            return res.status(400).json({
                message:"Provide Name ,Email,Password",
                error:true,
                success:false
            })

        }

        const user=await UserModel.findOne({email})
        if(user)
        {
            return res.json({
                message:"Already Register Email",
                error:true,
                success:false
            })
        }
            // here password are hashing using bcrypt 
        const salt= await bcryptjs.genSalt(10)
        const hashPassword=await bcryptjs.hash(password,salt)

        const payload={
            name,
            email,
            password:hashPassword
        }
// stor data in database mongodb
        const newUser=new UserModel(payload)
        const save= await newUser.save()

        // sending a email for verification using SendEmail.js 
        const verifyEmailUrl=`${process.env.FRONTEND_URL}/verify-email?code=${save?._id}`

        const verifyEmail = await sendEmail({
            to:email,
            subject:"verify email from Combat",
            html:verifiyEmailTemplet({
                name,
                url:verifyEmailUrl
            })
        })
        return res.json({
            message:"User register Successfully",
            error:false,
            success:true,
            data:save
        })
        
    } catch (error) {
        return  res.status(500).json({
            message:error.message||error,
            error:true,
            success:false
        })

        
    }
}

