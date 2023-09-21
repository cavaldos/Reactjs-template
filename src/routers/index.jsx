import { createBrowserRouter, Outlet } from "react-router-dom";

const AuthLayout = () => {
  <Outlet />;
};
export default createBrowserRouter([
  {
    element: <AuthLayout />,
    children: [
      {
        path: "/",
        element: <Outlet />,
      },
      {
        path: "/login",
        element: import("~/pages/auth"),
      },
      {
        path: "/home",
        element: import("~/pages/Home"),
      },
    ],
  },
]);
