import User from '../models/user_model.js';
import { validationResult, check } from 'express-validator';

export const checkUserExists = async (req, res, next) => {

    try{

        console.log("Reached req");

        const memberEmail = req.query.email;
        const errors = validationResult(req);

        if(!errors.isEmpty()){
            return res.status(422).json({
                "message" : "Please enter a valid email",
                errors : errors.array()
            });
        }

        const member = await Member.findOne({emailId : memberEmail });

        if(!member){
            return res.status(404).json({
                "message" : "No member found for this email address"
            });
        }

        return res.status(200).json({
            "message" : "Member exists!!",
            "member" : member
        });
    } catch (err) {

        return res.status(422).json({
            "message" : "Some error occured. Please try again"
        });
    }
}

export const signUpMember = async (req, res, next) => {
    
    try{

        console.log("Inside signup");

        const errors = validationResult(req);

        if(!errors.isEmpty()){
            return res.status(422).json({
                message : "Encountered error with input",
                errors : errors.array()
            });
        }

        const email = req.body.email;
        const name = req.body.name;

        const memberExist = await Member.findOne({emailId : email});

        if(memberExist != null){
            return res.status(409).json({
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
