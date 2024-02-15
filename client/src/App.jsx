import { createBrowserRouter, RouterProvider } from "react-router-dom";
import { PageRouter } from "./Router/Routes";

import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import AppProvider from "./Context/AuthContext";
import StateProvider from "./Context/StateContext";

const queryClient = new QueryClient();

export default function App() {
  return (
    <AppProvider>
      <StateProvider>
        <QueryClientProvider client={queryClient}>
          <RouterProvider router={PageRouter} />;
        </QueryClientProvider>
      </StateProvider>
    </AppProvider>
  );
}
