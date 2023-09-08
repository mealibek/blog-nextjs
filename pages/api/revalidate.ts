// http://localhost:3000/api/revalidate?path=/&secret=7e6533392e206eb5aabc91eae542c8f5

import { NextApiRequest, NextApiResponse } from "next";

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  if (req.query.secret != process.env.MY_SECRET_TOKEN) {
    return res.status(401).json({
      message: "Invalid token",
    });
  }
  const path = req.query.path as string;
  await res.revalidate(path);

  return res.json({
    revalidated: true,
  });
}
