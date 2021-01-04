import http from "http";
import url from "url";

const app = http.createServer((req, res) => {
  if (req.url) {
    const reqUrl = url.parse(req.url, true);
    res.end(JSON.stringify(reqUrl));
  }
});

export default app;
