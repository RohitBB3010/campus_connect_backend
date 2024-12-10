import mongoose, { mongo } from 'mongoose';
import User from '../models/user_model.js';
import { upload }  from '../utils/upload-image.js';
import path from 'path';

export const fetchHomeData = async (req, res, next) => {

    try{

        console.log("Fetch request recieved");
        const emailId = req.query.email;

        const user = await User.findOne({emailId : emailId});

        let responseUser = user;

        if(user.committees.length > 0){
            const transformedCommittees = user.committees.map(comm => ({
                committeeName: comm.committee_name,
                position: comm.position
            }));
           
            responseUser = {...user._doc, committees : transformedCommittees};
        } 

        if(!user.imageUrl || user.imageUrl.trim() === ''){
            responseUser = {...responseUser._doc, imageUrl : "images/user/constants/prof1.png"}; 
        }

        console.log(responseUser);

        return res.status(200).json({
            message : "Data pulled",
            user : responseUser
        });

    } catch (err) {
        return res.status(500).json({
            message : "An internal server error occured",
            error : err.message
        });
    }
}

export const uploadUserProfile = async (req, res, next) => {

    try{

        console.log('Received upload request');

        upload.single('image')(req, res, async(err) => {

            if(err){
                return res.status(500).json({
                    message : "Error uploading image",
                    error : err.message
                });
            }

            if(!req.file){
                return res.status(400).json({
                    message : "No file hidden"
                });
            }

            const id = req.query.id;
            const objectId = new mongoose.Types.ObjectId(id)

            const relativePath = req.file.path.split('images')[1]; 
            const savedPath = path.join('images', relativePath).replace(/\\/g, '/'); 

            await User.findOneAndUpdate(objectId, {$set : { imageUrl : savedPath}});

            return res.status(200).json({
                message : 'Profile uploaded',
                filePath : savedPath
            })
        });

    } catch (err) {

        return res.status(500).json({
            message : "Some internal server occured",
            error : err.message
        });
    }
}