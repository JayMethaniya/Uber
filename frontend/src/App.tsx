import { createBrowserRouter, RouterProvider } from "react-router-dom";
import CaptainSignup from "./Pages/CaptainSignup/index";
import UserLogin from "./Pages/UserLogin/index";
import UserSignup from "./Pages/UserSignup/index";
import CaptainLogin from "./Pages/CaptainLogin/index";
import Home from "./Pages/Home/index";

const router = createBrowserRouter([
  { path: "/", element: <Home /> },
  { path: "/captain-signup", element: <CaptainSignup /> },
  { path: "captain-login", element: <CaptainLogin /> },
  { path: "/login", element: <UserLogin /> },
  { path: "/signup", element: <UserSignup /> },
]);

const App: React.FC = () => {
  return <RouterProvider router={router} />;
};

export default App;
