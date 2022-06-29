import "./app.scss";
import { useRoutes } from "react-router-dom";
import { ROUTER_CONFIG } from "./router";

const App = () => {
  const appRoutesElement = useRoutes(ROUTER_CONFIG);
  return appRoutesElement;
};

export default App;
