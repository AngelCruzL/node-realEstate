import { Request, Response } from 'express';

export function renderLoginPage(req: Request, res: Response) {
  res.render('auth/login', {
    pageTitle: 'Iniciar Sesión',
  });
}

export function renderRegisterPage(req: Request, res: Response) {
  res.render('auth/register', {
    pageTitle: 'Crear Cuenta',
  });
}

export function renderForgotPasswordPage(req: Request, res: Response) {
  res.render('auth/forgot-password', {
    pageTitle: 'Recupera tu acceso a Bienes Raíces',
  });
}
