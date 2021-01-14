import http from "http";

import check from "./helpers/routesChecker";
import routes from "./routes";

export const DEFAULT_HEADERS = {
  "Content-Type": "application/json",
};

console.time("app");
const app = http.createServer(async (req, res) => {
  const { method, pathname, query } = check(req);
  if (method && pathname) {
    return routes[method][pathname](req, res, query) ||
      routes["DEFAULT"]["/error"](req, res);
  }
});
console.timeEnd("app");

export default app;
