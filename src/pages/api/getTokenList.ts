import type { NextApiRequest, NextApiResponse } from 'next';
import { tokenData } from "@/data/tokenData";

export default function handler(
  req: NextApiRequest,
  res: NextApiResponse<any>
) {
  res.status(200).json(tokenData);
}