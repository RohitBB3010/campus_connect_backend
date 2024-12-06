import { Router } from 'express';
import { addCommittees, updateMembersWithCommittees, memberFiller, memToCom} from './data_filler_controller.js';

const router = Router();

router.get('/adding-members', memberFiller);

router.get('/add-Committees', addCommittees);

router.get('/update-Members', updateMembersWithCommittees);

router.get('/addingMemToCom', memToCom);

export default router;