import { Router } from 'express';
import { renderLogin, renderRegister } from '@controllers/authController';

const authRouter = Router();

authRouter.get('/login', renderLogin);
authRouter.get('/register', renderRegister);

export default authRouter;
