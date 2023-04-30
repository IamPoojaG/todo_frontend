import express from 'express';

const router = express.Router();

import {
  getToDo,
  saveToDo,
  deleteToDo,
  updateToDo,
} from '../controller/Controller.js';

router.get('/get', getToDo);
router.post('/add', saveToDo);
router.delete('/delete', deleteToDo);
router.put('/update', updateToDo);

export default router;
