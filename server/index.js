import express from 'express'
import mongoose from 'mongoose'
import dotenv from 'dotenv'

dotenv.config({path: './.env'});

const app = express();

mongoose.connect(process.env.MONGODB_URL, {useNewUrlParser: true, useUnifiedTopology: true})
.then(()=> app.listen(process.env.PORT, ()=> console.log(`Server is running on port ${process.env.PORT}`)))
.catch((error)=> console.log('DB error:', error));

// mongoose.set('useFindAndModify', false);