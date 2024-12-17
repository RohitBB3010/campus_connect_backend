import mongoose, { mongo } from 'mongoose';
import User from '../models/user_model.js';
import { upload }  from '../utils/upload-image.js';
import path from 'path';

export const fetchHomeData = async (req, res, next) => {

    try{

        const emailId = req.query.email;

        const user = await User.findOne({emailId : emailId}).populate({path : 'committees.committee_doc'});

        let responseUser = user;

        if(user.committees.length > 0){
            const transformedCommittees = user.committees.map(comm => ({
                id : comm.committee_doc.id,
                committeeName: comm.committee_name,
                position: comm.position,
                logoUrl : comm.committee_doc.imageUrl
            }));

            responseUser = {...responseUser._doc, committees : transformedCommittees};
        }
        
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
    try {
  
      await new Promise((resolve, reject) => {
        upload.single('image')(req, res, (err) => {
          if (err) {
            return reject(err); 
          }
          resolve();
        });
      });
  
      if (!req.file) {
        return res.status(400).json({
          message: "No file uploaded",
        });
      }
  
      const id = req.query.id;
      const objectId = new mongoose.Types.ObjectId(id);
  
      const relativePath = req.file.path.split('images')[1];
      const savedPath = path.join('images', relativePath).replace(/\\/g, '/');

      const updatedUser = await User.findOneAndUpdate(
         objectId,
        { $set: { imageUrl : savedPath } },
        { new: true } 
      );

  

      if (!updatedUser) {
        return res.status(404).json({
          message: "User not found",
        });
      }

      return res.status(200).json({
        message: 'Profile uploaded successfully',
        filePath: savedPath,
      });
    } catch (err) {
      console.error("Error in uploadUserProfile:", err.message);
      return res.status(500).json({
        message: "Internal server error occurred",
        error: err.message,
      });
    }
};

export const editProfile = async (req, res, next) => {

    try{

        const newName = req.body.name;
        const email = req.body.email;
        const setImageNull = req.body.setImageNull;

        console.log("Newname is :" + newName);
        console.log('Set image null is :' + setImageNull);

        let updatedUser;

        if(setImageNull == true){
            updatedUser = await User.findOneAndUpdate({emailId : email}, { $set : { name : newName, imageUrl : null }}, { new : true });
            console.log(updatedUser);
        } else {
            updatedUser = await User.findOneAndUpdate({emailId : email}, { $set : { name : newName}}, { new : true });
        }

        return res.status(200).json({
            message : "Name updated",
            user : updatedUser
        });
    } catch (err) {
        return res.status(500).json({
            message : "Some internal server occured",
            error : err.message
        });
    }
}