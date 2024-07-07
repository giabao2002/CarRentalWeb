import express from 'express';
import { getAll } from '../controllers/productController.js';
import { login, signin } from '../controllers/userController.js';

const router = express.Router();

router.get('/', getAll);
router.post('/login', login);
router.post('/signin', signin);


export default router;