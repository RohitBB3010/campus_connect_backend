import express from 'express';
import mongoose from 'mongoose';
import bodyParser from 'body-parser';
import authRoutes from './routes/auth_routes.js';
import dataFillerRoutes from './utils/data_filler_route.js';
import cors from 'cors';

const app = express();

app.use(cors());

app.use(bodyParser.json());

app.use('/data-filling', dataFillerRoutes);

app.use('/auth', authRoutes);

mongoose.connect(process.env.MongoUrl).then((result) => {
    app.listen(8000);
    console.log("Connected to mongodb");
}).catch(err => {
    console.log(err);
});
