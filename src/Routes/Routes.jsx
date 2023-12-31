import { createBrowserRouter } from "react-router-dom";
import Main from "../Layouts/Main";
import Home from "../Pages/Home/Home";
import Login from "../Pages/Login/Login";
import LoginLayout from "../Layouts/LoginLayout";
import Register from "../Pages/Register/Register";
import ErrorPage from "../Pages/ErrorPage/ErrorPage";
import AllToysLayout from "../Layouts/AllToysLayout";
import AllToys from "../Pages/AllToys/AllToys";
import MyToysLayout from "../Layouts/MyToysLayout";
import MyToys from "../Pages/MyToys/MyToys";
import AddAToyLayout from "../Layouts/AddAToyLayout";
import AddAToy from "../Pages/AddAToy/AddAToy";
import BlogsLayout from "../Layouts/BlogsLayout";
import Blogs from "../Pages/Blogs/Blogs";
import ViewDetails from "../Pages/ViewDetails/ViewDetails";
import PrivateRoutes from "./PrivateRoutes";
import Update from "../Pages/Update/Update";
import UpdateLayout from "../Layouts/UpdateLayout";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Main></Main>,
    children: [
      {
        path: "/",
        element: <Home></Home>,
      },
      {
        path: "/viewDetails/:id",
        element: (
          <PrivateRoutes>
            <ViewDetails></ViewDetails>
          </PrivateRoutes>
        ),
        loader: ({ params }) =>
          fetch(`https://avenger-toys-server.vercel.app/viewDetails/${params.id}`),
      },
    ],
  },
  {
    path: "/allToys",
    element: <AllToysLayout></AllToysLayout>,
    children: [
      {
        path: "/allToys",
        element: <AllToys></AllToys>,
        loader: () => fetch("https://avenger-toys-server.vercel.app/allToys"),
      },
    ],
  },
  {
    path: "/myToys",
    element: <MyToysLayout></MyToysLayout>,
    children: [
      {
        path: "/myToys",
        element: <PrivateRoutes><MyToys></MyToys></PrivateRoutes>,
      },
    ],
  },
  {
    path: "/addAToy",
    element: <AddAToyLayout></AddAToyLayout>,
    children: [
      {
        path: "/addAToy",
        element: (
          <PrivateRoutes>
            <AddAToy></AddAToy>
          </PrivateRoutes>
        ),
      },
    ],
  },
  {
    path: "/blogs",
    element: <BlogsLayout></BlogsLayout>,
    children: [
      {
        path: "/blogs",
        element: <Blogs></Blogs>,
      },
    ],
  },
  {
    path: "/update/:id",
    element: <UpdateLayout></UpdateLayout>,
    children: [
      {
        path: "/update/:id",
        element: <Update></Update>,
        loader: ({params}) =>
          fetch(`https://avenger-toys-server.vercel.app/viewDetails/${params.id}`),
      },
    ],
  },
  {
    path: "/login",
    element: <LoginLayout></LoginLayout>,
    children: [
      {
        path: "/login",
        element: <Login></Login>,
      },
    ],
  },
  {
    path: "/register",
    element: <LoginLayout></LoginLayout>,
    children: [
      {
        path: "/register",
        element: <Register></Register>,
      },
    ],
  },
  {
    path: "*",
    element: <ErrorPage></ErrorPage>,
  },
]);

export default router;
