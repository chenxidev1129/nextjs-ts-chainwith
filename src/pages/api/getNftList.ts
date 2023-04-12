import type { NextApiRequest, NextApiResponse } from 'next';
import { nftData } from "@/data/nftData";

export default function handler(
  req: NextApiRequest,
  res: NextApiResponse<any>
) {
  res.status(200).json(nftData);
}