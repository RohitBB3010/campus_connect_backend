import express from 'express';
import { fetchMembers } from '../controllers/committee_controller.js';

const router = express.Router();

router.get('/fetch-members', fetchMembers);

export default router;