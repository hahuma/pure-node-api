import { IncomingMessage } from "http";
import url from "url";

export default function check(req: IncomingMessage) {
  if (req.url) {
    const { pathname, query } = url.parse(req.url, true);

    return {
      method: req.method,
      pathname,
      query,
    };
  }

  throw new Error("Invalid URL!");
}
