import {Router} from "express"
import { loginController, logoutController, registerUserController, verifiyEmailController } from "../controllers/user.controller.js"
import auth from "../midelwear/auth.js";
 const userRouter=Router()

 userRouter.post('/register',registerUserController);
 userRouter.post('/verify-email',verifiyEmailController)
 userRouter.post('/login',loginController)
 userRouter.get('/logout',auth,logoutController)

 export default userRouter;