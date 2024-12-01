import express from 'express';
import mongoose from 'mongoose';

const app = express();

mongoose.connect(process.env.MongoUrl).then((result) => {
    app.listen(8000);
    console.log("Connected to mongodb");
}).catch(err => {
    console.log(err);
});

