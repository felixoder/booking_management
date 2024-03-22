import express from 'express'
import { signInMembers, signMembers } from '../controllers/member.controller.js';
const router = express.Router();

router.post('/create-members',signMembers);
router.post('/signin',signInMembers);

export default router;