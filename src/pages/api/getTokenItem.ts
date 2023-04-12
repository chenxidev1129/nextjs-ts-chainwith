import type { NextApiRequest, NextApiResponse } from 'next';
import { tokenData } from "@/data/tokenData";

export default function handler(
  req: NextApiRequest,
  res: NextApiResponse<any>
) {
  const { id }: any = req.query;
  const result: any = tokenData.filter(item => {
    if (item.id == id) {
      return item;
    }
  });

  res.status(200).json(result.length > 0 ? result[0] : null);
}