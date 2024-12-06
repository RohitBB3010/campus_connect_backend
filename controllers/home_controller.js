import Member from "../models/member_model.js";
import Committee from "../models/committee_model.js";

export const getMemberData = async (req, res, next) => {

    const email = req.query.email;
    console.log(email);

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

    console.log(filteredCommittees[0].authorities);

    return res.status(200).json({
        member : memberData,
        committees : filteredCommittees
    });
}