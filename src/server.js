import http from "http";

import { jsonHalndler } from "./middlewares/jsonHandler.js";
import { routeHandler } from "./middlewares/routeHandler.js";

async function listener(request, response) {
  await jsonHalndler(request, response);
  routeHandler(request, response);
}

http.createServer(listener).listen(3333);
