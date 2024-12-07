import { Router } from 'express';
import { addCommittees, updateMembersWithCommittees, userFiller, memToCom} from './data_filler_controller.js';

const router = Router();

router.get('/adding-users', userFiller);

router.get('/add-Committees', addCommittees);

router.get('/update-users', updateMembersWithCommittees);

router.get('/addingMemToCom', memToCom);

export default router;