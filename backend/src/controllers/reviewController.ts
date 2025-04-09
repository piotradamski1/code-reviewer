import { RequestHandler } from 'express';
import { getAIFeedback } from '../services/aiService';

export const review: RequestHandler = async (req, res, next) => {
  try {
    const { code } = req.body;
    if (code) {
      const feedback = await getAIFeedback(code);
      res.json({ feedback });
    } else {
      res.status(400).json({ error: 'Code is required' });
    }
  } catch (error) {
    next(error);
  }
};
