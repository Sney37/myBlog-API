const express = require('express')
const mongoose = require('mongoose')
const userRoute = require('./Route/userRoute')
const categoryRoute = require('./Route/categoryRoute')
const blogRoute = require('./Route/blogRoute')
require('dotenv/config')
const cors = require('cors')

const app = express();

app.use(express.json());
app.use(cors());

app.get('/',(req,res)=>{
    res.send('this is home')
})

app.use('/api/user',userRoute)
app.use('/api/category',categoryRoute)
app.use('/api/blog',blogRoute)

app.listen(process.env.PORT,()=>{
    console.log(`the port number is ${process.env.PORT}`);
})

async function abc(){
    try {
        const res = await mongoose.connect(process.env.DB)
        console.log(res.default.STATES.connected);
    } catch (error) {
        console.log(error.message);
    }
}

abc()