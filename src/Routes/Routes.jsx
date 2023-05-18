import { createBrowserRouter } from "react-router-dom";
import Main from "../Layouts/Main";
import Home from "../Pages/Home/Home";
import Login from "../Pages/Login/Login";
import LoginLayout from "../Layouts/LoginLayout";
import Register from "../Pages/Register/Register";
import ErrorPage from "../Pages/ErrorPage/ErrorPage";

const router = createBrowserRouter([
  {
    path: '/',
    element: <Main></Main>,
    children: [{
      path: '/',
      element: <Home></Home>
    }]
  },
  {
    path: '/login',
    element: <LoginLayout></LoginLayout>,
    children: [{
      path: '/login',
      element: <Login></Login>
    }]
  },
  {
    path: '/register',
    element: <LoginLayout></LoginLayout>,
    children: [{
      path: '/register',
      element: <Register></Register>
    }]
  },
  {
    path: '*',
    element: <ErrorPage></ErrorPage>
  }
]);

export default router