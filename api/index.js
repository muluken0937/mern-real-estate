import express from 'express';
import mongoose from 'mongoose';
import dotenv from 'dotenv';
import userRouter from './routes/user.route.js'
dotenv.config()
mongoose.connect(process.env.MONGO).then(() =>{
    console.log("conndected to mongoDb")
    })
    .catch((err) => {
        console.log(err);
});
const app = express();
app.listen(300,() =>
{
    console.log("the server is run 300");
})


app.use('/api/user',userRouter)