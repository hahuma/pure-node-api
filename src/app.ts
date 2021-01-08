import http from "http";
import check from "./helpers/routesChecker";
import routes from "./routes";

console.time("app");
const app = http.createServer((req, res) => {
  const { method, query, pathname } = check(req);
  if (method && pathname) {
    const response = routes[method][pathname](query);
    res.write(response);

    res.end();
  }
});
console.timeEnd("app");

export default app;
