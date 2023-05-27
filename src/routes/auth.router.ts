import { Router } from 'express';
import {
  renderForgotPasswordPage,
  renderLoginPage,
  renderRegisterPage,
} from '@controllers/authController';

const authRouter = Router();

authRouter.get('/login', renderLoginPage);
authRouter.get('/register', renderRegisterPage);
authRouter.get('/forgot-password', renderForgotPasswordPage);

export default authRouter;
