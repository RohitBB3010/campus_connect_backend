import express from 'express';
import { fetchMembers, addAnnoucementWithImage } from '../controllers/committee_controller.js';

const router = express.Router();

router.get('/fetch-members', fetchMembers);

router.post('/add-announcement', addAnnoucementWithImage);

export default router;