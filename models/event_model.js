import mongoose from 'mongoose';

const EventModel = mongoose.Schema({
    title : {
        type : String,
        required : true
    },
    description : {
        type : String,
        required : true
    },
    committee : {
        type : mongoose.Schema.Types.ObjectId,
        required : true
    },
    eventStart : {
        type : Date,
        required : true
    },
    eventEnd : {
        type : Date,
        required : true,
    },
    coordinators : [
        {
            type : mongoose.Schema.Types.ObjectId
        }
    ]
});

const Event = mongoose.model('Event', EventModel);

export default Event;