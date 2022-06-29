import { RouteObject } from "react-router-dom";
import LazyWrapper from "@/components/lazy-wrapper/index";

const ROUTER_CONFIG: RouteObject[] = [
  {
    path: "/",
    element: <LazyWrapper path="/Home/index" />
  },
  {
    path: "/counter",
    element: <LazyWrapper path="/Counter/index" />
  },
  {
    path: "*",
    element: <>404 Not Found!</>
  }
];

export { ROUTER_CONFIG };
