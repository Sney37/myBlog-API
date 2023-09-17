const Blog = require('../Model/Blog');

exports.getBlog = async (req,res)=>{
    try {
        const data = await Blog.find().populate('category');
        return res.json({errors:false, data:data})
    } catch (error) {
        return res.status(400).json({errors:true,message:error.message})
    }
}

//post
exports.postBlog = async (req,res)=>{
    try {
        const data = await Blog.create(req.body);
        return res.json({errors:false, data:data})
    } catch (error) {
        return res.status(400).json({errors:true,message:error.message})
    }
}