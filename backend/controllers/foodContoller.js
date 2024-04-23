import foodModel from "../models/foodModel.js";

import fs from 'fs'

//add food items

const addFood = async(req,res) => {
    let image_file = `${req.file.filename}`;

    const food = new foodModel({
        name:req.body.name,
        description:req.body.description,
        price:req.body.price,
        category:req.body.category,
        image:image_file
    })

    try {
        await food.save();
        res.json({success:true,message:"Food Added"})
    } catch (error) {
        console.log("Error in adding Food");
        res.json({success:false,message:"Error"})
    }
}

//all foods

const listFood = async(req,res) => {
    try {
        const foods = await foodModel.find({});
        res.json({success:true,data:foods})
    } catch (error) {
        console.log("Error");
        res.json({success:false,message:"Error Fetching Data"})
    }
}


const removeFood = async(req,res) =>{
    try {
        const food = await foodModel.findById(req.body.id);
        fs.unlink(`uploads/${food.image}`,()=>{})

        await foodModel.findByIdAndDelete(req.body.id)
        res.json({success:true,message:"Food Removed"})
    } catch (error) {
        console.log(error);
        res.json({success:false,message:"Error in Food "})

    }
}
export {addFood,listFood,removeFood}