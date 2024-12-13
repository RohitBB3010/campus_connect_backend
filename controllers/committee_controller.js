import mongoose from "mongoose";
import Committee from "../models/committee_model.js";


export const fetchMembers = async (req, res, next) => {

    let committeeId = req.query.commId;

    committeeId = new mongoose.Types.ObjectId(committeeId);

    const committee = await Committee.findById(committeeId).populate({ path : 'authorities.memberId'}).populate({ path : 'members'});

    console.log(committee.authorities[0].memberId);

    let allMembers = committee.authorities.map((auth) => ({
        name : auth.memberId.name,
        email : auth.memberId.emailId,
        position : auth.position,
        imageUrl : auth.memberId.imageUrl
    }));

    committee.members.forEach((member) => {
        allMembers.push({
            name : member.name,
            email : member.emailId,
            position : 'Member',
            imageUrl : member.imageUrl
        });
    })

    return res.status(200).json({
        members : allMembers,
        totalMembers : allMembers.length
    });
} 