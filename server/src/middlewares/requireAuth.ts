import { Request, Response, NextFunction } from 'express';

import jwt from 'jsonwebtoken';

export const requireAuth = (req: Request, res: Response, next: NextFunction) => {
  const authHeader = req.headers.authorization;
  if (!authHeader) return res.status(401).send({ error: 'You must be logged in.' });
  const token = authHeader.split(' ')[1];
  if (!token) return res.status(401).send({ error: 'You must be logged in.' });
  jwt.verify(token, 'secret', (err, user) => {
    if (err) return res.status(401).send({ error: 'You must be logged in.' });
    req.user = user;
    next();
  });
};
