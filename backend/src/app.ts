import express from 'express';
import cors from 'cors';
import { review } from './controllers/reviewController';
import dotenv from 'dotenv';

dotenv.config();

const app = express();

app.use(cors());
app.use(express.json());

app.post('/api/review', review);

export default app;
