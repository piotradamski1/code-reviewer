import { getAIFeedback } from './aiService';

export async function processCodeReview(code: string): Promise<string> {
  return await getAIFeedback(code);
}
