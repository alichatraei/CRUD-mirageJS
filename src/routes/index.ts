import { Home, AddUser, EditUser } from "../pages";
import { TRoutes } from "../types";
const Routes: TRoutes = [
  {
    path: "/",
    exact: true,
    page: Home,
  },
  {
    path: "/adduser",
    exact: true,
    page: AddUser,
  },
  {
    path: "/edit/:id",
    exact: true,
    page: EditUser,
  },
];
export default Routes;
