import Member from '../models/member_model.js';
import { validationResult, check } from 'express-validator';

export const checkUserExists = async (req, res, next) => {

    try{

        const memberEmail = req.query.email;
        const errors = validationResult(req);

        if(!errors.isEmpty()){
            return res.status(422).json({
                "error" : "Please enter a valid email"
            });
        }

        const member = await Member.findOne({emailId : memberEmail });

        if(!member){
            return res.status(200).json({
                "message" : "No committee found"
            });
        }

        return res.status(200).json({
            "message" : "Member found",
            "member" : member
        });
    } catch (err) {

        return res.status(422).json({
            "message" : "Some error occured. Please try again"
        });
    }
}

export const addMember = async (req, res, next) => {
    
    try{

        const errors = validationResult(req);

        if(!errors.isEmpty()){
            return res.status(422).json({
                message : "Encountered error with input",
                errors : errors
            });
        }

        const email = req.body.email;
        const name = req.body.name;

        const memberExist = await Member.findOne({emailId : email});

        console.log(memberExist);

        if(memberExist != null){
            return res.status(422).json({
                message : "A member with this email already exists"
            });
        }

        const member = Member({
            name : name,
            emailId : email,
            committees : []
        });

        await member.save();

        return res.status(201).json({
            message : "Member created",
            member : member
        });

    } catch(err) {

    }
}
