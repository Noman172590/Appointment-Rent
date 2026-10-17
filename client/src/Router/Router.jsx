import { createBrowserRouter } from "react-router-dom";
import navpath from "../routes/navpath";
import MainLayout from "../layouts/MainLayout";

import Home from "../pages/Home";
import About from "../pages/About";
import Services from "../pages/Services";
import Concerns from "../pages/Concerns";
import Events from "../pages/Events";
import Contact from "../pages/Contact";
import Login from "../pages/Login";
import Register from "../pages/Register";
import BookingList from "../pages/BookingList";
import AddRentHouse from "../pages/AddRentHouse";
import MyRent from "../pages/MyRent";
import HouseDetails from "../pages/HouseDetails";
import NotFound from "../pages/NotFound";

const Router = createBrowserRouter([
  {
    path: "/",
    element: <MainLayout />,
    children: [
      { index: true, element: <Home /> },
      { path: navpath.about.slice(1), element: <About /> },
      { path: navpath.services.slice(1), element: <Services /> },
      { path: navpath.concerns.slice(1), element: <Concerns /> },
      { path: navpath.events.slice(1), element: <Events /> },
      { path: navpath.contact.slice(1), element: <Contact /> },
      { path: navpath.bookingList.slice(1), element: <BookingList /> },
      { path: navpath.addRentHouse.slice(1), element: <AddRentHouse /> },
      { path: navpath.myRent.slice(1), element: <MyRent /> },
      {
        path: `${navpath.houseDetails.slice(1)}/:id`,
        element: <HouseDetails />,
      },
      { path: "*", element: <NotFound /> },
    ],
  },
  {
    path: navpath.login,
    element: <Login />,
  },
  {
    path: navpath.register,
    element: <Register />,
  },
]);

export default Router;
