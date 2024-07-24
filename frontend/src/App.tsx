import Home from "./pages/home/Home";
import { createBrowserRouter, RouterProvider, Outlet } from "react-router-dom";
import JobListing from "./pages/joblisting/JobListing";
import Navbar from "./components/navbar/Navbar";
import Footer from "./components/footer/Footer";
import Login from "./pages/login/Login";
import Signup from "./pages/signup/Signup";
import MyJobs from "./pages/savejobs/MyJobs";
const App = () => {
  const Layout = () => {
    return (
      <>
        <Navbar />

        <div className="w-full ">
          <Outlet />
        </div>

        <Footer />
      </>
    );
  };

  const router = createBrowserRouter([
    {
      path: "/",
      element: <Layout />,
      children: [
        {
          path: "/",
          element: <Home />,
        },
        {
          path: "job-listing",
          element: <JobListing />,
        },
        {
          path: "my-jobs",
          element: <MyJobs />,
        },
      ],
    },

    {
      path: "/login",
      element: <Login />,
    },
    {
      path: "/signup",
      element: <Signup />,
    },
  ]);
  return <RouterProvider router={router} />;
};

export default App;
