import { Request, Response } from 'express';
import jwt from 'jsonwebtoken';

export const loginHandler = (req: Request, res: Response) => {
  const token = jwt.sign(
    {
      test: 'test',
    },
    'secret',
    {
      expiresIn: '1h',
    }
  );

  return res.json({
    token,
  });
};

export const profileHandler = (req: Request, res: Response) => {
  return res.json({
    profile: {
      username: req.user,
    },
    message: 'perfil',
  });
};
