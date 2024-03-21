import express from 'express'
import { signMembers } from '../controllers/member.controller.js';
const router = express.Router();

router.post('/create-members',signMembers);

export default router;