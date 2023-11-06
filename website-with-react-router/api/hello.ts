import type { VercelRequest, VercelResponse } from '@vercel/node';

const hello = (req: VercelRequest, res: VercelResponse) => {
  const { name = 'World' } = req.query;
  res.send(`Hello ${name}???`);
}
export default hello;
