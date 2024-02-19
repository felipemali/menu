import { RouteObject } from "react-router-dom";
import Home from "./pages/Home";
import Admin from "./pages/admin";
import ArccodionOrder from "./components/Accordion";
import Orders from "./components/Orders";

const routes: RouteObject[] = [
  {
    path: "/",
    element: <Home />,
  },
  {
    path: "/admin",
    element: <Admin />,
  },
  {
    path: "/teste",
    element: <ArccodionOrder items={[]} />,
  },
  {
    path: "/orders",
    element: <Orders />,
  },
];
export default routes;
