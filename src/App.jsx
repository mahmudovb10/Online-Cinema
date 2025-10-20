import { createBrowserRouter, RouterProvider } from "react-router-dom";

import Home from "./Pages/Home";

import Login from "./Pages/Login";
import Register from "./Pages/Register";
import Profile from "./Pages/Profile";
import Settings from "./Pages/Settings";

import MainLayout from "./layouts/MainLayout";
import SingleMovie from "./components/SingleMovie";
import ProtectedRoute from "./components/ProtectedRoute";

function App() {
  const router = createBrowserRouter([
    {
      path: "/login",
      element: <Login />,
    },
    {
      path: "/register",
      element: <Register />,
    },

    {
      path: "/",
      element: (
        <ProtectedRoute>
          <MainLayout />
        </ProtectedRoute>
      ),
      children: [
        {
          index: true,
          element: <Home />,
        },

        {
          path: "profile",
          element: <Profile />,
        },
        {
          path: "singlemovie/:imdbID",
          element: <SingleMovie />,
        },
        {
          path: "settings",
          element: <Settings />,
        },
      ],
    },
  ]);

  return <RouterProvider router={router} />;
}

export default App;
