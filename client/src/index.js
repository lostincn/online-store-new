import React, { createContext } from "react";
import App from "./App";
import DeviceStore from "./store/DeviceStore";
import UserStore from "./store/UserStore";
import { createRoot } from "react-dom/client";
export const Context = createContext(null);
const root = createRoot(document.getElementById("root"));
root.render(
  <Context.Provider
    value={{ user: new UserStore(), device: new DeviceStore() }}
  >
    <App />
  </Context.Provider>
);
