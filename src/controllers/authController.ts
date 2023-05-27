import { Request, Response } from 'express';

export function renderLogin(req: Request, res: Response) {
  res.render('auth/login');
}

export function renderRegister(req: Request, res: Response) {
  res.render('auth/register', {
    pageTitle: 'Crear Cuenta',
  });
}
