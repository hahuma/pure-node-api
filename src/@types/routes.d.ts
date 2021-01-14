import { IncomingMessage, ServerResponse } from "http";

import { ParsedUrlQuery } from "querystring";
import { IUser } from "./database";


export type ParsedUrlQuery = ParsedUrlQuery & Pick<IUser, 'id'>
export interface IRoutes {
  [GET: string]: IRoute<Promise<IUser[]>>;
  [POST: string]: IRoute<Promise<IUser | undefined>>;
  [DELETE: string]: IRoute<Promise<IUser>>;
}
interface IRoute<RequestType> {
  [pathname: string]: (
    req: IncomingMessage,
    res: ServerResponse,
    query?: ParsedUrlQuery
  ) => RequestType;
}
