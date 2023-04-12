import type { NextApiRequest, NextApiResponse } from 'next';
import { mintingData } from "@/data/mintingData";

export default function handler(
  req: NextApiRequest,
  res: NextApiResponse<any>
) {
  const { id }: any = req.query;
  console.log(id);
  const result: any = mintingData.filter(item => {
    if (item.id == id) {
      return item;
    }
  });

  res.status(200).json(result.length > 0 ? result[0] : null);
}