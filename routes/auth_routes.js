import { Router } from 'express';
import { checkUserExists, addMember } from '../controllers/auth_controller.js';
import { query, check, validationResult } from 'express-validator';

const router = Router();

router.get('/checkMember', 
    query('email').isEmail().withMessage('Please enter a valid email'),
    checkUserExists);

router.post('/addMember',
    [
        check('email').isEmail().withMessage('Please enter a valid email'),
        check('name').isLength({ min : 5 }).withMessage('Please enter full name')
    ],
    addMember
)

export default router;