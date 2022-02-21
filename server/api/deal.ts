import type { IncomingMessage, ServerResponse } from "http";
import axios from 'axios'

const ENDPOINT = "https://api.freee.co.jp/api/1/deals"
const API_HEAD = {
  headers: {
    'Authorization': `Bearer ${process.env.access_token}`,
    // access_tokenは本来環境変数にするものではないです。力尽きました。ごめんなさい。
    'X-Api-Version': "2020-06-15",
    'accept': "application/json"
  }
}

export default async (req: IncomingMessage, res: ServerResponse) => {
  if (req.method != 'GET') {
    console.log(req.method)
    res.statusCode = 448
    res.end()
  }

  let data: Array<any>
  await axios.get(
    `${ENDPOINT}?company_id=${process.env.company_id}&limit=50`, 
    API_HEAD
  ).then(res => {
    data = res.data.deals;
  });

  const json = JSON.stringify(data)
  res.statusCode = 200
  res.setHeader('Content-Type', 'application/json')
  res.end(json)
}