import React from "react";
import ReactDOM from "react-dom/client";

import "./index.css";
import { RouterProvider } from "react-router-dom";
import router from "./config/router.tsx";
import { QueryClientProvider, QueryClient } from "@tanstack/react-query";
import { StatusContextProvider } from "./context/StatusContextApi.tsx";

const queryClient = new QueryClient();

ReactDOM.createRoot(document.getElementById("root")!).render(
  <QueryClientProvider client={queryClient}>
    <StatusContextProvider>
      <RouterProvider router={router}></RouterProvider>
    </StatusContextProvider>
  </QueryClientProvider>
);
