// This is for simple testing you can delete this in production

import express from 'express'
import { testCommand } from '../controllers/test.controller.js';
const router = express.Router();

router.get('/testcommand',testCommand);

export default router;
