import mongoose from 'mongoose';
import User from '../models/User.js';
import bcrypt from 'bcryptjs';
import {createError}  from '../error.js';
import jwt from 'jsonwebtoken';

export const signup = async (req, res, next) => {
    try{
        const salt = bcrypt.genSaltSync(10);
        const hash = bcrypt.hashSync(req.body.password, salt);
        const newUser = new User({...req.body, password: hash});

        await newUser.save();
        res.status(200).send("User has been created!");
    }catch(err){
        next(err);
    }  
}

export const signin = async (req, res, next) => {
    try{
        const user = await User.findOne({name: req.body.name});
        if(!user){
            return next(createError(404, "User not found"));
        }
        const isPasswordValid = await bcrypt.compare(req.body.password, user.password);
        if(!isPasswordValid){
            return next(createError(404, "Invalid credentials"));
        }
        const token = jwt.sign({_id: user._id}, process.env.JWT_SECRET);
        const {password , ...userWithoutPassword} = user.toObject();
        res
        .cookie("access_token", token, {
            httpOnly: true
        })
        .status(200)
        .json(userWithoutPassword);
     }catch(err){
        next(err);
    }  
}