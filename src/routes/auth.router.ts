import { Router } from 'express';
import {
  registerUser,
  renderForgotPasswordPage,
  renderLoginPage,
  renderRegisterPage,
} from '@controllers/authController';

const authRouter = Router();

authRouter.get('/login', renderLoginPage);
authRouter.get('/register', renderRegisterPage);
authRouter.post('/register', registerUser);
authRouter.get('/forgot-password', renderForgotPasswordPage);

export default authRouter;
