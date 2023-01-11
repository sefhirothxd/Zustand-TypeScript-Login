import express from 'express';
import authRoutes from './routes/auth.routes';
import cors from 'cors';

const app = express();
app.use(
  cors({
    origin: 'http://127.0.0.1:5173',
    credentials: true,
  })
);
app.use(express.json());
app.use(authRoutes);

export default app;
