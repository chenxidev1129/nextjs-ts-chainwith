import type { NextApiRequest, NextApiResponse } from 'next';
import { historyData } from "@/data/historyData";

export default function handler(
  req: NextApiRequest,
  res: NextApiResponse<any>
) {
  const { id }: any = req.query;
  const result: any = historyData.filter(item => {
    if (item.id == id) {
      return item;
    }
  });

  res.status(200).json(result.length > 0 ? result[0] : null);
}