// Represent our entire application
import express from 'express';
import dotenv from 'dotenv';
import {createConnection} from './src/shared/db/connection.js'
import {userRoutes} from './src/modules/user/routes/user-routes.js'

const app=express();
dotenv.config();
app.use(express.json())
app.use('/',userRoutes)
const promise=createConnection();
promise.then(data=>{
    console.log('DB Connection established');
    app.listen(1234,err=>{
        if(err){
            console.log('Server crashed',err);
        }
        else{
            console.log('Server up and running');
        }
    })
}).catch(err=>{
    console.log('Server crashed',err);
})
