import express from 'express';
import { Contect } from '../Controller/contect_me.controller.js';
const router = express.Router();
router.post('/', Contect);
export default router;