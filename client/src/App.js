import * as React from "react";
import { createBrowserRouter, RouterProvider, } from "react-router-dom";
import Header from "./components/Header/index";
// import Footer from "./components/Footer/index";
import ErrorPage from "./pages/Error/index";
import Home from "./pages/Home/index";
import About from './pages/About/index';
import Music from "./pages/Music/index";
import Contact from "./pages/Contact/index";
import 'bootstrap/dist/css/bootstrap.min.css';


const router = createBrowserRouter([
  {
    path: '/',
    element: <Home />,
    errorElement: <ErrorPage />,
  },
  {
    path: "/about",
    element: <About />,
    errorElement: <ErrorPage />,
  },
  {
    path: "/music",
    element: <Music />,
    errorElement: <ErrorPage />,
  },
  {
    path: "/contact",
    element: <Contact />,
    errorElement: <ErrorPage />,
  },
]);
function App() {
  return (
    <>
      <Header />
      <RouterProvider router={router} />
      {/* <Footer /> */}
    </>
  );
}

export default App;
