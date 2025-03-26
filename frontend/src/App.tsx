import { createBrowserRouter, RouterProvider } from "react-router-dom";
import CaptainSignup from "./Pages/CaptainSignup/index";
import UserLogin from "./Pages/UserLogin/index";
import UserSignup from "./Pages/UserSignup/index";
import CaptainLogin from "./Pages/CaptainLogin/index";
import Start from "./Pages/Start/index";
import UserHome from "./Pages/User Home/index";
import UserContext from "./Context/UserContext";
import UserProtectedWrapper from "./Pages/UserProtectedWrapper";
import UserLogout from "./Pages/UserLogout/index";
import CaptainHome from "./Pages/CaptainHome/index";
import CaptainLogout from "./Pages/CaptainLogout/index";
import CaptainProtectedWrapper from "./Pages/CaptainProtectedWrapper";

// Separate public and protected routes for better organization
const publicRoutes = [
  { path: "/", element: <Start /> },
  { path: "/captain-signup", element: <CaptainSignup /> },
  { path: "/captain-login", element: <CaptainLogin /> },
  { path: "/login", element: <UserLogin /> },
  { path: "/signup", element: <UserSignup /> },
];

const protectedRoutes = [
  { 
    path: "/user/home", 
    element: <UserProtectedWrapper><UserHome /></UserProtectedWrapper> 
  },
  { 
    path: "/user/logout", 
    element: <UserProtectedWrapper><UserLogout /></UserProtectedWrapper> 
  },
  { 
    path: "/captain/home", 
    element: <CaptainProtectedWrapper><CaptainHome /></CaptainProtectedWrapper> 
  },
  { 
    path: "/captain/logout", 
    element: <CaptainProtectedWrapper><CaptainLogout /></CaptainProtectedWrapper> 
  },
];

const router = createBrowserRouter([
  ...publicRoutes,
  ...protectedRoutes,
]);

const App: React.FC = () => {
  return (
    <UserContext>
      <RouterProvider router={router} />
    </UserContext>
  );
};

export default App;
