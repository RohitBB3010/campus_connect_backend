import mongoose from "mongoose";
import Committee from "../models/committee_model.js";
import { upload } from "../utils/upload-image.js";
import Announcement from "../models/announcement_model.js";
import fs from 'fs';
import parentDir from "../utils/path_locals.js";
import multer from "multer";
import path from 'path';
import User from "../models/user_model.js";

export const fetchMembers = async (req, res, next) => {

    try {

        console.log("Request made at fetch members");

        let committeeId = req.query.commId;

        committeeId = new mongoose.Types.ObjectId(committeeId);

        console.log(committeeId);

        const committee = await Committee.findById(committeeId).populate({ path : 'authorities.memberId'}).populate({ path : 'members'});

        console.log(committee);

        let allMembers = committee.authorities.map((auth) => ({
            name : auth.memberId.name,
            email : auth.memberId.emailId,
            position : auth.position,
            imageUrl : auth.memberId.imageUrl ?? "images/constants/prof1.png"
        }));

        console.log(allMembers[0].imageUrl);

        committee.members.forEach((member) => {
            allMembers.push({
                name : member.name,
                email : member.emailId,
                position : 'Member',
                imageUrl : member.imageUrl ?? "images/constants/prof1.png"
            });
        })
    return res.status(200).json({
        members : allMembers,
        totalMembers : allMembers.length
    });
    } catch (err) {
        return res.status(500).json({
            message : "Some internal server occured",
            error : err.message
        });
    }
} 

export const addAnnoucementWithImage = async (req, res, next) => {

    try {

        const diskStorage = multer.diskStorage({
            destination : async (req, file, cb) => {
                const folderPath = path.join(parentDir, 'images', 'committees', 'announcements');

                try {
                    await fs.promises.mkdir(folderPath, { recursive: true });
                    cb(null, folderPath);
                } catch (err) {
                    console.error(`Error creating directory: ${err.message}`);
                    cb(new Error('Failed to create directory'), false);
                }
            },
            filename : (req, file, cb) => {
                const extension = path.extname(file.originalname);
                const baseName = path.basename(file.originalname, extension);
                const fileName = `${baseName}-${Date.now()}${extension}`;
                cb(null, fileName);
            }
        });
        
        const fileFilter = (req, file, cb) => {
            if (file.mimetype === 'image/png' || file.mimetype === 'image/jpeg' || file.mimetype === 'image/jpg') {
                cb(null, true);
            } else {
                cb(new Error('Invalid file type. Only PNG and JPEG are allowed!'), false);
            }
        }

        const upload = multer({
            storage : diskStorage,
            fileFilter : fileFilter
        });


        upload.fields([{ name : 'image'}])(req, res, async(err) => {
            if (err) {
                return res.status(400).json({
                    message: "Multer error",
                    error: err.message
                });
            }

            const filePaths = req.files.image.map(file => {
                const relativePath = file.path.split('images')[1];
                return path.join('images', relativePath).replace(/\\/g, '/');
        });

            const title = req.body.title;
            const content = req.body.content;
            const tag = req.body.tag;
            const visibility = req.body.visibility;
            const committee_id = req.body.committee_id;
            const userEmail = req.body.userEmail;

            console.log(userEmail);

            const userId = await User.findOneAndUpdate({emailId : userEmail}, '_id');

            const announcement = Announcement({
                title : title,
                content : content,
                tag : tag,
                visibility : visibility,
                committee_id : committee_id,
                author : userId,
                images : filePaths
            });

            await announcement.save();

            console.log(announcement._id);

            await Committee.findOneAndUpdate({_id : committee_id}, { $push : { announcements : announcement._id}});

            return res.status(200).json({
                message : "Added announcement",
                announcement : announcement
            });
        });
    

    } catch (err) {

        console.log(err);
    return res.status(500).json({
        message : "Error encountered",
        error : err.message
    });
    }
}
