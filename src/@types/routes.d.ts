import { ParsedUrlQuery } from "querystring";

export interface IRoutes {
  [GET: string]: IRoute;
  [POST: string]: IRoute;
  [DELETE: string]: IRoute;
}

interface IRoute {
  [pathname: string]: (query?: ParsedUrlQuery) => string;
}
