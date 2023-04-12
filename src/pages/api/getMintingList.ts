import type { NextApiRequest, NextApiResponse } from 'next';
import { mintingData } from "@/data/mintingData";

export default function handler(
  req: NextApiRequest,
  res: NextApiResponse<any>
) {
  res.status(200).json(mintingData);
}