import { IncomingMessage, ServerResponse } from "http";

import { IUser } from "./database";

declare module "querystring" {
  export interface ParsedUrlQuery {
    id: Pick<IUser, 'id'>;
  }
}

export interface IRoutes {
  [METHOD: string]: IRoute;
}
interface IRoute {
  [pathname: string]: (
    req: IncomingMessage,
    res: ServerResponse,
    query?: ParsedUrlQuery
  ) => Promise<void> | void;
}
