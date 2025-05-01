import { useRoutes } from "react-router-dom";
import React from "react";
import Login from "./Login";
import SignUp from "./SignUp";
import Home from "./Home";

export default function Router() {
  const routes = useRoutes([
    {
      path: "/",
      element: <SignUp />,
      index: true,
    },
    {
      path: "/Login",
      element: <Login />,
    },
    {
      path: "/Home",
      element: <Home />,
    },
  ]);

  return routes;
}
