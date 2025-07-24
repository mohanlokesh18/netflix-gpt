import React, { useEffect, useState } from "react";
import Login from "./Login";
import Browse from "./Browse";
import { createBrowserRouter, RouterProvider } from "react-router-dom";

const Body = () => {
  const appRoute = createBrowserRouter([
    {
      path: "/",
      element: <Login />,
    },
    {
      path: "/browser",
      element: <Browse />,
    },
  ]);

  return (
    <div className="">
      <RouterProvider router={appRoute} />
    </div>
  );
};

export default Body;
