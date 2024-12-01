import mongoose, { mongo } from "mongoose";

const CommitteeSchema = mongoose.Schema({
    name : {
        type : String,
        required : true
    },
    members : [
        {
            type : mongoose.Schema.Types.ObjectId,
            required : true
        }
    ],
    events : [
        {
            type : mongoose.Schema.Types.ObjectId,
            required : true
        }
    ],
    announcements : [
        {
            title : { type : String, required : true },
            content : { type : String, required : false },
            imagePath : { type : String, required : false },
            author : { type : mongoose.Schema.Types.ObjectId, required : true }
        }
    ]
});

exports.module = mongoose.model('Committee', CommitteeSchema);