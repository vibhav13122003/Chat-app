import dotenv from 'dotenv'
import express, { application } from 'express'
import authRoutes from './routes/auth.routes.js'
import connectDB from "./db/connectiontomongo.js";
import messageRoutes from './routes/message.routes.js'
import cookieParser from "cookie-parser";
import userRoutes from './routes/user.routes.js'
import cors from 'cors'

import path from 'path'

const app=express();
dotenv.config();
app.use(cookieParser())

const __dirname = path.resolve();

app.use(express.static(path.join(__dirname, "/frontend/dist")));

app.use(cors({
    origin: '*'
}));


const PORT = process.env.PORT || 4000;

app.use(express.json())
app.use('/api/auth',authRoutes);
app.use('/api/messages', messageRoutes);
app.use('/api/users',userRoutes);


app.get("*", (req, res) => {
    res.sendFile(path.join(__dirname, "frontend", "dist", "index.html"));
});

app.get('/',(req,res)=>{
    res.send('hello world')
})
app.listen(PORT,()=>{
    connectDB();
    console.log(`server is running on port ${PORT}`)
})




