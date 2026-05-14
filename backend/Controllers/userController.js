import User from "../Models/userModel.js"
import bcrypt from "bcryptjs"
export const signup=async(req,res)=>{
    try {
        const {fullname,email,password}=req.body
        const existingUser=await User.findOne({email})
        if(existingUser) {
            return res.status(400).json({msg:"User already exists"})
        }
        const hashedPassword=await bcrypt.hash(password,10)
        const user=new User({fullname,email,password:hashedPassword})
        await user.save()
        res.status(200).json({msg:"User created successfully",user})
    }
    catch(err) {
        res.status(500).json({msg:"Error in creating user"+err})
    }
}

export const login=async(req,res)=>{
    try {
        const {email,password}=req.body
        const user=await User.findOne({email})
        if(!user) {
            return res.status(400).json({msg:"User does not exist"})
        }
        const isMatch=await bcrypt.compare(password,user.password)
        if(!isMatch) {
            return res.status(400).json({msg:"Invalid credentials"})
        }
        res.status(200).json({msg:"User logged in successfully",user})
    }
    catch(err) {
        res.status(500).json({msg:"Error in logging in user"+err})
    }
}