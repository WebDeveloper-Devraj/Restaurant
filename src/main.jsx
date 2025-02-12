import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import App from "./routes/App";
import Home from "../src/components/Home/Home";
import MenuPage from "./components/Menu/MenuPage";
import { Provider } from "react-redux";
import restaurantStore from "./store";
import AboutUs from "./components/About_Us/AboutUs";
import Gallery from "./components/Gallery/Gallery";
import ContactUs from "./components/contact/ContactUs";
import DishDetailPage from "./components/DishDetailPage/DishDetailPage";
import CartPage from "./components/CartPage/CartPage";

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
        path: "/dish/:id",
        element: <DishDetailPage />,
      },
      {
        path: "/cart",
        element: <CartPage />,
      },
      {
        path: "/about",
        element: <AboutUs />,
      },
      {
        path: "/gallery",
        element: <Gallery />,
      },
      {
        path: "/contact",
        element: <ContactUs />,
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
