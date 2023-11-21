

export const validate=(schema)=>{
    const middleware=(req,res,next)=>{
    const {error}=schema.validate(req.body);
    if(error){
        return res.status(400).json({message:'Validation failed'})
    }
    else{
    next();
    }
    }
   return middleware;
}