import type { NextApiRequest, NextApiResponse } from 'next';
import { historyData } from "@/data/historyData";

export default function handler(
  req: NextApiRequest,
  res: NextApiResponse<any>
) {
  res.status(200).json(historyData);
}