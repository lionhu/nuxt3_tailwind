import { IncomingMessage, ServerResponse } from "http";
export default (req: IncomingMessage, res: ServerResponse) => {
  console.log("www");
  if (req.method != "POST") {
    console.log(req.method);
    res.statusCode = 448;
    res.end();
  }
  let data: any;
  let body: any;
  let resMpdel: any;
  let statusCode = 201;
  let msg = null;
  let response = null;

  req.on("data", (chunk) => {
    data = `${chunk}`;
  });

  req.on("end", (chunk) => {
    body = JSON.parse(data); // ===== フォームクラスが使える!!! ======
    const form = new FormDeal(body);
    axios
      .post(`${ENDPOINT}`, form.postBodyFromForm(), {
        headers: API_HEAD.headers,
      })
      .then((res) => {
        resMpdel = res.data.deal;
      })
      .catch((error) => {
        if (error.response) {
          console.log(error.response);
          console.log(error.response.data.status_code);
          console.log(error.response.data.errors[0]);
          statusCode = error.response.status_code;
          msg = error.response.data.errors[0];
        }
      });
  });

  return data;

  res.statusMessage = msg;
  res.setHeader("Content-Type", "application/json");
  res.end(response);
};
