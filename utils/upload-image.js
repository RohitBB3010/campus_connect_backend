import multer from 'multer';
import path from 'path';
import fs from 'fs';
import parentDir from './path_locals.js';
import { query } from 'express';

const diskStorage = multer.diskStorage({
    destination : (req, file, cb) => {
  
      const {type, id} = req.query;
  
      let folderPath = '';
      if(type === 'user'){
        folderPath = path.join(parentDir, 'images', 'user')
      }
      else if(type === 'committee'){
        folderPath = path.join(parentDir, 'images', 'committeeIds');
      }
      else if(type === 'events'){
        folderPath = path.join(parentDir, 'images', 'committees', 'events');
      }
      else if(type === 'announcements'){
        folderPath = path.join(parentDir, 'images', 'committees', 'announcements');
      } else {
        return cb(new Error('File type not specified'), false);
      }
  
      fs.mkdirSync(folderPath, { recursive: true });
  
      cb(null, folderPath);
    },
    filename : (req, file, cb) => {
      const extension = path.extname(file.originalname); 
      const fileName = `${req.query.id}${extension}`;
      cb(null, fileName);
    }
  });
  
  const fileFilter = (req, file, cb) => {
    if(file.mimetype == 'image/png' || file.mimetype === 'image/jpeg'){
      cb(null, true);
    } else {
      cb(null, false);
    }
  }
  
  const upload = multer({
    storage : diskStorage,
    fileFilter : fileFilter
  });

  const bodyParseMiddleware = (req, res, next) => {
    multer().none()(req, res, next);
  }
  
export { upload, bodyParseMiddleware };