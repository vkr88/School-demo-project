import express from 'express';
import { comment} from'../Controller/School.controller.js';
import { createComment } from '../Controller/School.controller.js'
import { Contect } from '../Controller/contect_me.controller.js';
const router = express.Router();
router.get('/', comment);
router.post('/',createComment);

router.post('/contect', Contect);
export default router;