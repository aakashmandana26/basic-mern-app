const express = require('express');
const mongoose = require('mongoose');
const app = express();
const dotenv = require('dotenv');
dotenv.config();

const userRouter = require('./routes/userRouter');
const cors = require('cors');
app.use(cors());

app.use(express.json());


mongoose.connect(process.env.URI).then(()=>{
    console.log("Connection to database successful")
}).catch((error)=>{
    console.log("error", error);
});

app.use(userRouter);


app.listen(process.env.PORT, ()=>{
    console.log("Server is running on port", process.env.PORT)
});

