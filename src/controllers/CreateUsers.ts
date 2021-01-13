import { IncomingMessage, ServerResponse } from "http";
import { INewUser } from "../@types/database";
import usersRepository from "../repositories/UsersRepository";
import { DEFAULT_HEADERS } from "../app";

export default class CreateUsersController {
  async create(req: IncomingMessage, res: ServerResponse) {
    for await (const data of req) {
      try {
        const userData: INewUser = JSON.parse(data);
        const newUser = await usersRepository.create(userData);
        res.writeHead(201, DEFAULT_HEADERS);
        res.write(JSON.stringify(newUser));
        res.end();
      } catch (error) {
        res.writeHead(400, DEFAULT_HEADERS);
        console.error(error);
        res.end(error)
      }
    }
  }
}
