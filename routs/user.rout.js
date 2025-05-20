import {Router} from "express"
import { registerUserController, verifiyEmailController } from "../controllers/user.controller.js"
 const userRouter=Router()

 userRouter.post('/register',registerUserController);
 userRouter.post('/verify-email',verifiyEmailController)

 export default userRouter;