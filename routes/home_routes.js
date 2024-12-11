import { Router } from 'express';
import { fetchHomeData,uploadUserProfile, editProfile } from '../controllers/home_controller.js';

const router = Router();

router.get('/fetch-home', fetchHomeData);

router.post('/upload_image', uploadUserProfile);

router.put('/edit-profile', editProfile);

export default router;