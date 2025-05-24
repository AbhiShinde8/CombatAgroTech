import sendEmail from "../config/sendEmail.js";
import UserModel from "../models/user.model.js"
import bcryptjs from "bcryptjs"
import verifiyEmailTemplet from "../utils/verifiyEmailTemplet.js";
import generateAccessToken from "../utils/generateAccessToken.js";
import generatRefreshToken from "../utils/generatRefreshToken.js";
import uploadImageCloudinery from "../utils/uploadImageCloudinery.js";

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

export async function verifiyEmailController(req,res)
{
    try {

        const {code}=req.body;

        const user =await UserModel.findOne({_id:code});

        if(!user)
        {
            return res.status(400).json({
                message:"Invalid Code",
                error:true,
                success:false
            })
        }

        const updateUser=await UserModel.updateOne({_id:code},{verifiy_email:true})

        return res.json({
            message:"Verification is Done",
            error:false,
            success:true
        })
        
    } catch (error) {
        return res.status(500).json({
            message:error.message||error,
            error:true,
            success:false

        })
        
    }
}


export async function loginController(req,res)
{
    try {
        const {email,password}=req.body|| {}

        const user =await UserModel.findOne({email})

        if(!email||!password)
        {
            return res.json({
                message:"Provide Email,Password",
                error:true,
                success:false
            })
        }

        if(!user)
        {
            return res.status(400).json({
                message:"User not register",
                error:true,
                success:false
            })

        }
        if(user.stetus!=="Active")
        {
            return res.status(400).json({
                message:"Contact To the Admin",
                error:true,
                success:false
            })
        }

        const checkPassword =  await bcryptjs.compare(password,user.password)
       

        if(!checkPassword)
        {
            return res.status(400).json({
                message:"Check Your Password...",
                error:true,
                success:false   
            })
        }

        const accesstoken=await generateAccessToken(user._id);
        const refreshtoken=await generatRefreshToken(user._id);

        const cookieOptions={
            // The secure: true flag means the cookie will only be sent over HTTPS. 
            httpOnly:true,
            secure:false,
            // secure:true,
            sameSite:'None'
            
        }
        res.cookie('accesstoken',accesstoken,cookieOptions)
        res.cookie('refreshtoken',refreshtoken,cookieOptions)

        return res.json({
            message:"Login Successfully..",
            error:false,
            success:true,
            data:{
                accesstoken,
                refreshtoken

            }
        })
        
    } catch (error) {
        return res.status(500).json({
            message:error.message||error,
            success:false,
            error:true
        })
        
    }
}

export async function logoutController(req,res)
{
    try {
        const userid=req.userId  //middleware

        const cookieOption={
            httpOnly:true,
            secure:false,
            sameSite:"None"

        }

      res.clearCookie("accesstoken",cookieOption)
      res.clearCookie("refreshtoken",cookieOption)

      const removeRefreshToken = await UserModel.findByIdAndUpdate(userid,{
        refresh_token:""
      }) 

      res.json({
        message:"User Logout Successfully",
        error:false,
        success:true
      })
        
    } catch (error) {
        return res.json({
            message:error.message||error,
            error:true,
            success:false
        })
        
    }
}

// upload user Avatar 
 
// export async function uploadAvatar(req,res){
//     try {
//         const image =req.file
//         console.log('image',image)
//         const upload=await uploadImageCloudinery(image)
//         console.log('upload',upload)
//         return res.json({
//             message:"Upload Profile.",
//             data:upload
//         })
//     } 
//     catch (error) {
//         return res.status(500).json({
//             message:error.message||error,
//             error:true,
//             success:false
//         })
        
//     }
// }
export async function uploadAvatar(req, res) {
    try {
      const image = req.file;
      if (!image) {
        return res.status(400).json({
          message: "No image file provided.",
          error: true,
          success: false
        });
      }
  
      console.log("Uploading image...");
      const upload = await uploadImageCloudinery(image);
      console.log("Upload result:", upload);
  
      return res.json({
        message: "Profile image uploaded successfully.",
        data: upload,
        success: true,
        error: false
      });
    } catch (error) {
      return res.status(500).json({
        message: error.message || error,
        error: true,
        success: false
      });
    }
  }
  
