// CRUD operations concerning user

import { UserModel } from "../models/user-schema.js"

export const userService={

    async register(user){
    
    try{
    const document=await UserModel.create(user);
    return document;
    }
    catch(err){
        console.log('Unable to register',err);
        throw err;
    }
    },
    login(){

    }
}