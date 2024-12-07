import Member from "../models/member_model.js";
import Committee from "../models/committee_model.js";

export const getMemberData = async (req, res, next) => {

    try{
        const email = req.query.email;

        const memberData = await Member.findOne({ emailId : email });

        const committeesAll = await Committee.find().populate({path : 'authorities.memberId', select : 'name emailId'}).lean();

        const filteredCommittees = committeesAll.map(committee => {
            return {
                ...committee,
                authorities : committee.authorities.filter(auth => auth.position == "Head" || auth.position == "Co-Head").map(auth => ({
                    name : auth.memberId?.name,
                    email : auth.memberId?.emailId,
                    position : auth.position
                }))
            }
        });

        return res.status(200).json({
            member : memberData,
            committees : filteredCommittees
        });
    } catch (err) {
        return res.status(500).json({message : "Some internal error occurred please retry after some time"});
    }
}

export const modifyMemberName = async (req, res, next) => {

    try{

        const newName = req.body.name;
        const memberId = req.body.memberId;

        await Member.findByIdAndUpdate(memberId, {name : newName}, { new : true});

        return res.status(200).json({
            "mesage" : "Name Updated Successfully"
        });

    } catch (err) {

        return res.status(500).json({
            "message" : "Unexpected error occured, please try again after sometime"
        });
    }
}