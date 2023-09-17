const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');
const User = require('../Model/User');

//get
exports.getUser = async (req,res)=>{
    try {
        const data = await User.find()
        return res.json({errors:false,data:data})
    } catch (error) {
        return res.status(400).json({errors:true,message:error.message})
    }
}

//reg
exports.register = async (req,res)=>{
    try {
        const emailExists = await User.findOne({email:req.body.email});
        if(emailExists) return res.status(400).json({errors:true, message:'user already exists'})

        const salt = await bcrypt.genSalt();
        req.body.password = await bcrypt.hash(req.body.password,salt)

        const data = await User.create(req.body)
        return res.json({errors:false, data:data})
    } catch (error) {
        return res.status(400).json({errors:true,message:error.message})
    }
}

//login
exports.login = async (req,res)=>{
    try {
        const userExists = await User.findOne({email:req.body.email})
        if(!userExists) return res.status(400).json({errors:true, message:'email or password invalid'})

        const verifyPassword = await bcrypt.compare(req.body.password,userExists.password)
        if(!verifyPassword) return res.status(400).json({errors:true, message:'email or password invalid'})

        const token = await jwt.sign({id:userExists._id},process.env.SEC)

        
        return res.json({errors:false, data:{token:token,User:userExists}})
    } catch (error) {
        return res.status(400).json({errors:true,message:error.message})
    }
}


