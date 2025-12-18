import http from "http";

import { jsonHalndler } from "./middlewares/jsonHandler.js";

async function listener(request, response) {
  await jsonHalndler(request, response);
  console.log(request.body);
}

http.createServer(listener).listen(3333);
