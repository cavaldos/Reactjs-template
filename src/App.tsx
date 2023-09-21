import "./App.css";
import React from "react";
import { RouterProvider } from "react-router-dom";
import routers from "./routers/index.jsx";

import Home from "./pages/home.tsx";
const App: React.FC = () => {
  return (
    <>
      <RouterProvider router={routers} />
    </>
  );
};

export default App;
