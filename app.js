import express from 'express';
import mongoose from 'mongoose';
import bodyParser from 'body-parser';
import authRoutes from './routes/auth_routes';


const app = express();

mongoose.connect(process.env.MongoUrl).then((result) => {
    app.listen(8000);
    console.log("Connected to mongodb");
}).catch(err => {
    console.log(err);
});

