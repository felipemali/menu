import { useRoutes } from "react-router-dom";

import routes from "./routes";

import { MenuContextProvider } from "./context/MenuContext";

function App() {
  const elements = useRoutes(routes);
  return <MenuContextProvider>{elements}</MenuContextProvider>;
}
export default App;
