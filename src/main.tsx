import "./App.css";
import App from "./App.tsx";

import React from "react";
import ReactDOM from "react-dom/client";
import { PersistGate } from "redux-persist/integration/react";
import { persistor } from "~/redux/store";
import { Provider } from "react-redux";
import store from "~/redux/store";

import { RouterProvider } from "react-router-dom";
import routers from "./routers/index.jsx";


ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <Provider store={store}>
      <PersistGate loading={null} persistor={persistor}>
        <RouterProvider router={routers}/>
         
      </PersistGate>
    </Provider>
  </React.StrictMode>
);
