import express from "express";
import authMiddleware from "../middleware/auth.js";
import { placeOrder, verifyOrder, userOrders, getAllOrders } from "../controllers/orderController.js";

const orderRouter = express.Router()

orderRouter.post("/place",authMiddleware,placeOrder)
orderRouter.post("/verify",verifyOrder)
orderRouter.post("/orders", authMiddleware,userOrders)
orderRouter.get('/list',getAllOrders)

export default orderRouter
