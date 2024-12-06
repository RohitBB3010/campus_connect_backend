import express from 'express';
import mongoose from 'mongoose';
import bodyParser from 'body-parser';
import authRoutes from './routes/auth_routes.js';
import homeRoutes from './routes/home_routes.js';
import cors from 'cors';

const app = express();

app.use(cors());

app.use(bodyParser.json());

app.use('/auth', authRoutes);
app.use('/home', homeRoutes);

mongoose.connect(process.env.MongoUrl).then((result) => {
    app.listen(8000);
    console.log("Connected to mongodb");
}).catch(err => {
    console.log(err);
});
