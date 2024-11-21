import express from 'express';
import { rick } from '../controllers/user.controller.js'

const router = express.Router();

router.get('/rick', rick)

export default router;