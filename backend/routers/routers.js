import express from 'express';
import { getAll } from '../controllers/productController.js';
import { login, register } from '../controllers/userController.js';

const router = express.Router();

router.get('/', getAll);
router.post('/login', login);
router.post('/register', register);


export default router;