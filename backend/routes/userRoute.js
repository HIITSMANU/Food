import express from "express"

import { loginUser,registerUser ,getLoginUserDetails} from "../controllers/userController.js"

const userRouter = express.Router()

userRouter.post("/register",registerUser)
userRouter.post("/login",loginUser)
userRouter.get("/loginget",getLoginUserDetails)


export default userRouter