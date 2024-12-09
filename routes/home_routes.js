import { Router } from 'express';
import { fetchHomeData,uploadUserProfile } from '../controllers/home_controller.js';
import { bodyParseMiddleware } from '../utils/upload-image.js';

const router = Router();

router.get('/fetch-home', fetchHomeData);

router.post('/upload_image', uploadUserProfile);

export default router;