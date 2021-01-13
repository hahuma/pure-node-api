import { resolve } from "dns";
import http from "http";
import check from "./helpers/routesChecker";
import routes from "./routes";

export const DEFAULT_HEADERS = {
  "Content-Type": "application/json",
};

console.time("app");
const app = http.createServer(async (req, res) => {
  const { method, pathname } = check(req);
  if (method && pathname) {
    routes[method][pathname](req, res) || routes["DEFAULT"]["/error"](req, res);
  }
});
console.timeEnd("app");

export default app;
