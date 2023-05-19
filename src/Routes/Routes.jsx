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
import ViewDetailsLayout from "../Layouts/ViewDetailsLayout";
import ViewDetails from "../Pages/ViewDetails/ViewDetails";

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
        element: <ViewDetails></ViewDetails>,
        loader: ({params}) =>
          fetch(`http://localhost:5000/viewDetails/${params.id}`),
      },
    ],
  },
  // {
  //   path: '/viewDetails',
  //   element: <ViewDetailsLayout></ViewDetailsLayout>,
  //   children: [{
  //     path: ':id',
  //     element: <ViewDetails></ViewDetails>
  //   }]
  // },
  {
    path: "/allToys",
    element: <AllToysLayout></AllToysLayout>,
    children: [
      {
        path: "/allToys",
        element: <AllToys></AllToys>,
      },
    ],
  },
  {
    path: "/myToys",
    element: <MyToysLayout></MyToysLayout>,
    children: [
      {
        path: "/myToys",
        element: <MyToys></MyToys>,
      },
    ],
  },
  {
    path: "/addAToy",
    element: <AddAToyLayout></AddAToyLayout>,
    children: [
      {
        path: "/addAToy",
        element: <AddAToy></AddAToy>,
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
