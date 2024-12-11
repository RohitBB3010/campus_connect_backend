
import multer from 'multer';
import path from 'path';
import fs from 'fs';
import parentDir from './path_locals.js';

const diskStorage = multer.diskStorage({
  destination: async (req, file, cb) => {
    const { type } = req.query;

    let folderPath = '';
    if (type === 'user') {
      folderPath = path.join(parentDir, 'images', 'user');
    } else if (type === 'committee') {
      folderPath = path.join(parentDir, 'images', 'committeeIds');
    } else if (type === 'events') {
      folderPath = path.join(parentDir, 'images', 'committees', 'events');
    } else if (type === 'announcements') {
      folderPath = path.join(parentDir, 'images', 'committees', 'announcements');
    } else {
      return cb(new Error('File type not specified'), false);
    }

    try {
      await fs.promises.mkdir(folderPath, { recursive: true });
      cb(null, folderPath);
    } catch (err) {
      console.error(`Error creating directory: ${err.message}`);
      cb(new Error('Failed to create directory'), false);
    }
  },
  filename: (req, file, cb) => {
    const extension = path.extname(file.originalname);
    const fileName = req.query.id ? `${req.query.id}${extension}` : `default-${Date.now()}${extension}`;
    cb(null, fileName);
  },
});

const fileFilter = (req, file, cb) => {
  if (file.mimetype === 'image/png' || file.mimetype === 'image/jpeg') {
    cb(null, true);
  } else {
    cb(new Error('Invalid file type. Only PNG and JPEG are allowed!'), false);
  }
};

const upload = multer({
  storage: diskStorage,
  fileFilter: fileFilter,
});

const bodyParseMiddleware = (req, res, next) => {
  upload.fields([{ name: 'image', maxCount: 1 }])(req, res, next);
};

export { upload, bodyParseMiddleware };
