import UserModel from "../models/user.model.js";
import jwt from "jsonwebtoken";

const generatRefreshToken=async(userId)=>{

    const token=  await jwt.sign({id:userId},process.env.SECRET_KEY_REFRESH_TOKEN,{expiresIn:'7d'})
    
    //  tokken are updated in daTABASE 

        const updateRefreshTokenUser =await UserModel.updateOne(
            {_id:userId},
            {
                refresh_token:token
            }
        )
        return token
      
}
export default generatRefreshToken;