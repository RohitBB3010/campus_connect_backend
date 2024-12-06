import { Router } from 'express';
import { getMemberData } from '../controllers/home_controller.js';

const router = Router();

router.get('/getMemberData', getMemberData)

export default router;