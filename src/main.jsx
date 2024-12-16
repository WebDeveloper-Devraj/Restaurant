import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import App from "./routes/App";
import Home from "../src/components/Home/Home";
import MenuPage from "./components/Menu/MenuPage";
import { Provider } from "react-redux";
import restaurantStore from "./store";
import AboutUs from "./components/About_Us/AboutUs";

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      {
        path: "/",
        element: <Home />,
      },
      {
        path: "/menu",
        element: <MenuPage />,
      },
      {
        path: "/about",
        element: <AboutUs />,
      },
    ],
  },
]);

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <Provider store={restaurantStore}>
      <RouterProvider router={router}></RouterProvider>
    </Provider>
  </StrictMode>
);
