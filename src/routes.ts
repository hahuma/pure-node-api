import { IRoutes } from "./@types/routes";

const routes: IRoutes = {
  GET: {
    "/": () => "List Users",
  },
  POST: {
    "/create": () => "Create User",
  },
  DELETE: {
    "/delete": (query) => "Delete User with id: " + query?.id,
  },
};

export default routes;
