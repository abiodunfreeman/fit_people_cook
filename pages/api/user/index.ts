//@ts-nocheck
// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import type { NextApiRequest, NextApiResponse } from 'next';

type Data = {
  user: string;
};

export default function handler(
  req: NextApiRequest,
  res: NextApiResponse<Data>
) {
  console.log(req.method);
  console.log(req.body);
  const user = { name: req.body.name, email: req.body.email };
  res.status(200).json({ success: true, user });
}
