import {Router} from "express"
import { loginController, registerUserController, verifiyEmailController } from "../controllers/user.controller.js"
 const userRouter=Router()

 userRouter.post('/register',registerUserController);
 userRouter.post('/verify-email',verifiyEmailController)
 userRouter.post('/login',loginController)

 export default userRouter;