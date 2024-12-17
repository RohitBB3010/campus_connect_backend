import express from 'express';
import { fetchMembers, addAnnoucementWithImage, fetchAnnouncements } from '../controllers/committee_controller.js';

const router = express.Router();

router.get('/fetch-members', fetchMembers);

router.post('/add-announcement', addAnnoucementWithImage);

router.get('/fetch-announcements', fetchAnnouncements);

export default router;