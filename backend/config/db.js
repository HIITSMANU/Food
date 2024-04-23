import mongoose from "mongoose";

export const connectDB = async() => {
    await mongoose.connect('mongodb+srv://userHungerEats:Hunger123Eats456@cluster0.zfgjid7.mongodb.net/Food_delivery').then(()=>console.log("DB connected"));
}