import { Request, Response } from 'express';
import { check, validationResult } from 'express-validator';

import { User } from '@models/User';
import { generateToken } from '@helpers/generateToken';

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

export async function registerUser(req: Request, res: Response) {
  const { name, email, password } = req.body;

  await check('name', 'El nombre es obligatorio').not().isEmpty().run(req);
  await check('email', 'Ingrese un correo electrónico valido')
    .isEmail()
    .run(req);
  await check('password', 'La contraseña debe contener al menos 6 caracteres')
    .isLength({ min: 6 })
    .run(req);
  await check('password_confirmation', 'Las contraseñas no coinciden')
    .equals('password')
    .run(req);

  let result = validationResult(req);

  if (!result.isEmpty()) {
    return res.render('auth/register', {
      pageTitle: 'Crear Cuenta',
      errors: result.array(),
      user: {
        name,
        email,
      },
    });
  }

  const userExists = await User.findOne({ where: { email } });
  if (userExists) {
    return res.render('auth/register', {
      pageTitle: 'Crear Cuenta',
      errors: [
        {
          msg: 'El correo electrónico ya se encuentra registrado',
        },
      ],
      user: {
        name,
        email,
      },
    });
  }

  const user = await User.create({
    name,
    email,
    password,
    token: generateToken(),
  });

  res.render('templates/message', {
    pageTitle: 'Confirma tu Cuenta',
    message: `Hola ${user.name}, te hemos enviado un correo electrónico para que confirmes tu cuenta`,
  });
}

export function renderForgotPasswordPage(req: Request, res: Response) {
  res.render('auth/forgot-password', {
    pageTitle: 'Recupera tu acceso a Bienes Raíces',
  });
}
