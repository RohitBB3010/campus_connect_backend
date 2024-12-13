import mongoose from "mongoose";

const CommitteeSchema = mongoose.Schema({
    name : {
        type : String,
        required : true
    },
    authorities : [
        {
            position : { type : String, required : true},
            memberId : { type : mongoose.Schema.Types.ObjectId, ref : 'User', required : true},
        }
    ],
    members : [
        {
            type : mongoose.Schema.Types.ObjectId,
            ref : 'User',
            required : true
        }
    ],
    events : [
        {
            type : mongoose.Schema.Types.ObjectId,
            ref : 'Event',
            required : true
        }
    ],
    announcements : [
        {
            title : { type : String, required : true },
            content : { type : String, required : false },
            imagePath : { type : String, required : false },
            author : { type : mongoose.Schema.Types.ObjectId, ref : 'Member', required : true }
        }
    ],
    imageUrl : {
        type : String,
        required : false
    }
});

const Committee = mongoose.model('Committee', CommitteeSchema);

export default Committee;