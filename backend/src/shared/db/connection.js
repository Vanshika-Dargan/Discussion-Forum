import mongoose from "mongoose";



export function createConnection(){
    const url=process.env.MONGODB_URL;

    return mongoose.connect(url)
}