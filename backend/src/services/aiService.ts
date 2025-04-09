import OpenAI from 'openai';

export async function getAIFeedback(code: string): Promise<string> {
  const openai = new OpenAI({
    apiKey: process.env.OPENAI_API_KEY,
  });
  const prompt = `Act as an experienced JavaScript/TypeScript developer responsible for code reviews. Thoroughly analyze 
  the following code based on Clean Code principles (Robert C. Martin) such as readability, naming, avoiding duplication, 
  clarity of functions, appropriate responsibility separation, consistent code style, and testability. Focus solely on the 
  code’s structure and best practices, and propose concrete suggestions for improvement if possible. Do not evaluate the 
  code’s functionality. The code snippet is:\n\n${code}`;
  const response = await openai.chat.completions.create({
    model: 'gpt-3.5-turbo',
    messages: [{ role: "user", content: prompt }],
  });

  return response.choices[0].message.content || 'No feedback.';
}