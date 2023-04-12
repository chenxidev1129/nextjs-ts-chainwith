import type { NextApiRequest, NextApiResponse } from 'next';
import { nftData } from "@/data/nftData";

export default function handler(
  req: NextApiRequest,
  res: NextApiResponse<any>
) {
  const { id }: any = req.query;
  const result: any = nftData.filter(item => {
    if (item.id == id) {
      return item;
    }
  });

  res.status(200).json(result.length > 0 ? result[0] : null);
}