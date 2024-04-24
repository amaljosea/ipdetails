// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import type { NextApiRequest, NextApiResponse } from "next";
import requestIp from "request-ip";
import { headers } from "next/headers";
type Data = any

export default function handler(
  req: NextApiRequest,
  res: NextApiResponse<Data>,
) {

    const detectedIp = requestIp.getClientIp(req);
    const headersRaw = req.rawHeaders

    console.log(req)

  res.status(200).json({ name: "John Doe", detectedIp, headersRaw });
}
