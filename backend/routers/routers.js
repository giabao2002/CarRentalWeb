import express from 'express';
import { getAll, getAreas } from '../controllers/productController.js';
import { login, register } from '../controllers/userController.js';

const router = express.Router();

router.get('/', getAll);
router.post('/login', login);
router.post('/register', register);
router.get('/areas', getAreas);


export default router;