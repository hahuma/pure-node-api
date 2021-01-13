
import { IncomingMessage, ServerResponse } from "http";
import { IRoutes } from "./@types/routes";

import CreateUsersController from "./controllers/CreateUsers";
import ListUsersController from "./controllers/ListUsers";

const listUsers = new ListUsersController()
const createUsers = new CreateUsersController()

const routes: IRoutes = {
  "GET": {
    "/": listUsers.index,
  },
  "POST": {
    "/create": createUsers.create,
  },
  "DELETE": {
    "/delete": () => {},
  },
  "DEFAULT": {
    "/error": (req: IncomingMessage, res: ServerResponse) => {
      res.writeHead(402, 'Invalid URL')
    }
  }
};

export default routes;
