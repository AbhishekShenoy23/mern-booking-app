import { createBrowserRouter } from "react-router-dom";
import LayoutScreen from "../layout/LayoutScreen";
import RegisterPage from "../pages/RegisterPage";
import HomePage from "../pages/HomePage";

const router = createBrowserRouter([
  {
    path: "/",
    element: <LayoutScreen />,
    children: [
      {
        path: "/", // Root path for LayoutScreen
        element: <HomePage />, // Example: Replace with your home page component
      },
      {
        path: "register", // Relative path for RegisterPage within LayoutScreen
        element: <RegisterPage />,
      },
      // Add more routes as needed
    ],
  },
]);

export default router;
