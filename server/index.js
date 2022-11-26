import express from 'express'
import mongoose from 'mongoose'
import bodyParser from 'body-parser';
import cors from 'cors'
import dotenv from 'dotenv'

import productRoutes from './routes/products.js'

dotenv.config({path: './.env'});

const app = express();

//  "extended: true" -->  precises that the req.body object will contain values of any type instead of just strings.
app.use(bodyParser.json({ limit: "30mb", extended: true }));
app.use(bodyParser.urlencoded({ limit: "30mb", extended: true }));
app.use(cors());

app.use('/products', productRoutes)

mongoose.connect(process.env.MONGODB_URL, {useNewUrlParser: true, useUnifiedTopology: true})
.then(()=> app.listen(process.env.PORT, ()=> console.log(`Server is running on port ${process.env.PORT}`)))
.catch((error)=> console.log('DB error:', error));

// mongoose.set('useFindAndModify', false);