import http from "http";
import check from "./helpers/routesChecker";
import routes from "./routes";

const app = http.createServer((req, res) => {
  const { method, query, pathname } = check(req);
  if (method && pathname) {
    const response = routes[method][pathname](query);
    res.end(JSON.stringify(response));
  }
});

export default app;
