import User from "../models/user.model.js";
import bcrypt from "bcryptjs/dist/bcrypt.js";
export const signup = async (req , res) =>{
  const { username, email, password } = req.body; 
  const hashedPassoword = bcrypt.hashSync(password, 10);
  const newUser = new User({ username,email,password: hashedPassoword});
 try {
  await newUser.save();
  res.status(201).json("user created succesfully"); 
 } catch (error) {
  res.status(500).json(error.message);
  
 }

};