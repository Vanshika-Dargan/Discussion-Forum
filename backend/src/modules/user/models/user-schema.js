//Schema for user

import mongoose from "mongoose";
import {Schema, SchemaTypes} from "mongoose";


const userSchema=new Schema({
    'email':{
        type:SchemaTypes.String,
        required:true,
        unique:true,
    },
    'password':{
        type:SchemaTypes.String,
        minLength:8,
        maxLength:16,
    },
    'name':{
        type:SchemaTypes.String
    },
    'status':{
    type:SchemaTypes.String,
    default:'A'
    },
    'created':{
    type:SchemaTypes.Date,
    default:new Date()
    }
})

export const UserModel=mongoose.model('Users',userSchema);
