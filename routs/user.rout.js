import {Router} from "express"
import { forgotPasswordController, loginController, logoutController, registerUserController, resetPassword, updateUserDetails, uploadAvatar, verifiyEmailController, verifiyForgotPasswordOtp } from "../controllers/user.controller.js"
import auth from "../midelwear/auth.js";
import upload from "../midelwear/multer.js";
 const userRouter=Router()

 userRouter.post('/register',registerUserController);
 userRouter.post('/verify-email',verifiyEmailController)
 userRouter.post('/login',loginController)
 userRouter.get('/logout',auth,logoutController)
 userRouter.put('/upload-avatar',auth,upload.single('avatar'),uploadAvatar)
 userRouter.put('/update-user',auth,updateUserDetails)
 userRouter.put('/forgot-password',forgotPasswordController)
 userRouter.put('/verifiy_forgot-password',verifiyForgotPasswordOtp)
 userRouter.put('/reset-password',resetPassword)

 export default userRouter;