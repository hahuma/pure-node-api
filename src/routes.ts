
import { IncomingMessage, ServerResponse } from "http";
import { IRoutes } from "./@types/routes";

import CreateUsersController from "./controllers/CreateUsers";
import ListUsersController from "./controllers/ListUsers";
import DeleteUsersController from "./controllers/DeleteUsers";

const listUsers = new ListUsersController()
const createUsers = new CreateUsersController()
const deleteUsers = new DeleteUsersController()

const routes: IRoutes = {
  "GET": {
    "/": listUsers.index,
  },
  "POST": {
    "/create": createUsers.create,
  },
  "DELETE": {
    "/delete": deleteUsers.delete,
  },
  "DEFAULT": {
    "/error": (req: IncomingMessage, res: ServerResponse) => {
      res.writeHead(402, 'Invalid URL')
    }
  }
};

export default routes;
