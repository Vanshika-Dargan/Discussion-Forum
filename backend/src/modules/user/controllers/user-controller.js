import { userService } from "../services/user-service.js";
export const register=async(req,res)=>{
try{
const user=req.body;
const doc=await userService.register(user)
res.status(200).json({message:'Registration successfully'})
}
catch(err){
    res.status(500).json({message:'Application crashed'})
    console.log(err)
}
}