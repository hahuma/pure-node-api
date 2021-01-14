import { IncomingMessage, ServerResponse } from "http";
import { ParsedUrlQuery } from "querystring";
import { DEFAULT_HEADERS } from "../app";
import userRepository from "../repositories/UsersRepository";

export default class ListUsersController {
  public async delete(
    req: IncomingMessage,
    res: ServerResponse,
    query?: ParsedUrlQuery
  ) {
    try {
      const id = query?.id;
      if (id) {
        const user = await userRepository.delete(id);
        res.write(`User deleted with id: ${user.id}`);
        res.end();
      }
    } catch ({ message }) {
      res.writeHead(404, DEFAULT_HEADERS);
      res.write(JSON.stringify(message));
      res.end();
    }
  }
}
