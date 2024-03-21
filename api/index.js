import express from 'express'
import mongoose from 'mongoose'
import dotenv from 'dotenv'
import cookieParser from "cookie-parser";
import memberRoutes from './routes/member.route.js'
//configuration of dotenv
dotenv.config();
const app = express();

app.use(express.json());
app.use(cookieParser());

mongoose.connect(process.env.MONGO_URI)
.then(console.log('The database is connected successfully'))
.catch(()=>{
    console.log('Bugg')
})


// This is for simple testing you can delete this in production
// app.use('/test',testRoutes)
// This is for member log-in
app.use('/api/member',memberRoutes);


app.listen(process.env.PORT,()=>{
    console.log(`App is running on port ${process.env.PORT}`)
})