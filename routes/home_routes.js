import { Router } from 'express';
import { getMemberData, modifyMemberName } from '../controllers/home_controller.js';

const router = Router();

router.get('/getHomePageData', getMemberData);

router.put('/modifyUser', modifyMemberName);

export default router;