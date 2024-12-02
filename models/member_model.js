import mongoose from "mongoose";

const MemberSchema = new mongoose.Schema({
    name : {
        type : String,
        required : true
    },
    emailId : {
        type : String,
        required : true
    },
    committees : [
        {
            committee_doc : { type : mongoose.Schema.Types.ObjectId, ref : 'Committee', required : true},
            committee_name : { type : String, required : true},
            role : { type : String, required : true }
        }
    ],
}, { timestamps : true });

const Member = mongoose.model('Member', MemberSchema);

export default Member;