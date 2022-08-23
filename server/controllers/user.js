import { createError } from "../error.js";
import User from "../models/User.js";
import Video  from "../models/Video.js";

export const updateUser = async(req,res,next)=>{
    if(req.params.id === req.user._id){
      try{
        const updateUser = await User.findByIdAndUpdate(req.params.id,{
            $set:req.body
        },
        {new:true});
        res.status(200).json({updateUser});
      }catch(err){
          next(err);
      }
    }else{
        return next(createError(403, 'You can only Update your own profile'));
    }
}

export const deleteUser = async(req,res,next)=>{
    if(req.params.id === req.user._id){
        try{
         await User.findByIdAndDelete(req.params.id);
          res.status(200).json("User Deleted Successfully");
        }catch(err){
            next(err);
        }
      }else{
          return next(createError(403, 'You can only delete your own profile'));
      }
}

export const getUser = async (req,res,next)=>{
    try{
        const user = await User.findById(req.params.id);
        res.status(200).json(user);
    }catch(err){
        next(err)
    }
}

export const subscribe = async (req,res,next)=>{
    try{
        await User.findByIdAndUpdate(req.user._id,{
            $push:{subscribedUsers:req.params.id},
        });
        await User.findByIdAndUpdate(req.params.id,{
            $inc:{subscribers: 1}
        });
        res.status(200).json("Subscribed Successfully");
    }catch(err){
        next(err)
    }
}
export const unsubcribe = async (req,res,next)=>{
    try{
        await User.findByIdAndUpdate(req.user._id,{
            $pull:{subscribedUsers:req.params.id},
        });
        await User.findByIdAndUpdate(req.params.id,{
            $inc:{subscribers: -1}
        });
        res.status(200).json("Unsubscribed Successfully");
    }catch(err){
        next(err)
    }
}

export const like = async(req,res,next)=>{
    const id = req.user._id;
    const videoId = req.params.videoId;
    try{
       await Video.findByIdAndUpdate(videoId,{
        $addToSet:{likes:id},
        $pull:{dislikes:id}
       }) 
       res.status(200).json("Video Liked")
    }catch(err){
        next(err)
    }
}

export const dislike = async (req,res,next)=>{
    const id = req.user._id;
    const videoId = req.params.videoId;
    try{
     await Video.findByIdAndUpdate(videoId,{
        $addToSet:{dislikes:id},
        $pull:{likes:id}
        }) 
     res.status(200).json("Video Disliked.")
    }catch(err){
        next(err)
    }
}

