import React, { createContext } from "react";
import { useRoutes } from "react-router-dom";
import { useSelector } from "react-redux";
import { routes, userRoutes } from "src/route";
import messagesEn from "src/helpers/locales/en.json";
import { fetchFromStorage } from "src/helpers/context/Storage";
import { ThemeProvider } from "@emotion/react";
import theme from "src/theme";
import { identifiers } from "src/helpers/constants/indentifier";
import LoginPage from "./views/component/auth/Login";

const Context = createContext();

const App = () => {
  const redux_auth = useSelector((state) => state?.ActionReducer?.authdata);
  const auth = redux_auth
    ? redux_auth
    : fetchFromStorage(identifiers?.authData);
  // let routeData = fetchFromStorage(identifiers?.authData) ? userRoutes : routes;
  let routeData = routes;
  console.log("routeData", routeData);
  const routing = useRoutes(routeData);

  const messages = { ...messagesEn };
  return (
    <ThemeProvider theme={theme}>
      <Context.Provider value={{ messages }}>{routing}</Context.Provider>
      {/* <LoginPage /> */}
    </ThemeProvider>
  );
};

export default App;
export { Context as IntlContext };
