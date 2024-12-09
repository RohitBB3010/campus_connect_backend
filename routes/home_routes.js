import { Router } from 'express';
import { fetchHomeData } from '../controllers/home_controller.js';

const router = Router();

router.get('/fetch-home', fetchHomeData);

export default router;