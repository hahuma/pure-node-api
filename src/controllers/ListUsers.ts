import { IncomingMessage, ServerResponse } from "http";
import userRepository from "../repositories/UsersRepository";

export default class ListUsersController {
  public async index(req: IncomingMessage, res: ServerResponse) {
    const file = await userRepository.list();
    res.write(JSON.stringify(file));
    res.end();
  }
}
