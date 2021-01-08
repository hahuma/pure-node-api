import { IncomingMessage } from "http";
import url from "url";

console.time("Check-URL");
export default function check(req: IncomingMessage) {
  if (req.url) {
    const { pathname, query } = url.parse(req.url, true);

    console.log(typeof pathname, typeof req.method);

    return {
      method: req.method,
      pathname,
      query,
    };
  }

  throw new Error("Invalid URL!");
}
console.timeEnd("Check-URL");
