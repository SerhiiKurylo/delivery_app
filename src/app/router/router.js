import { createBrowserRouter } from "react-router-dom";
import { Shops, ShoppingCarts } from "../components/pages";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Shops />,
  },
  {
    path: "/cart",
    element: <ShoppingCarts />,
  },
]);

export default router;
