import { createBrowserRouter } from "react-router-dom";
import App from "./App";
import SearchBackground from "./components/SearchBackground";
import AddBackground from "./pages/Admin/AddBackground";
import Admin from "./pages/Admin/Admin";
import UpdateDeleteBackground from "./pages/Admin/UpdateDeleteBackground";
import UserGestion from "./pages/Admin/UserGestion";
import BackgroundPage from "./pages/Background/BackgroundPage";
import HomePage from "./pages/HomePage/HomePage";
import Login from "./pages/Login/Login";
import Season from "./pages/Season/Season";
import Subscribe from "./pages/Subscribe/Subscribe";
import Favorites from "./pages/Favorites/Favorites";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      {
        path: "/",
        element: <HomePage />,
      },
      {
        path: "/subscribe",
        element: <Subscribe />,
      },
      {
        path: "/login",
        element: <Login />,
      },
      {
        path: "/favorites",
        element: <Favorites />,
      },
      {
        path: "/admin",
        element: <Admin />,
        children: [
          { path: "update-delete-background", element: <SearchBackground /> },
          {
            path: "update-delete-background/:id",
            element: <UpdateDeleteBackground />,
          },
          {
            path: "add-Background",
            element: <AddBackground />,
          },
          {
            path: "user-gestion",
            element: <UserGestion />,
          },
        ],
      },
      {
        path: "/background/:id",
        element: <BackgroundPage />,
        loader: async ({ params }) => {
          try {
            const response = await fetch(
              `${import.meta.env.VITE_API_URL}/api/background/${params.id}`,
            );

            if (response.ok) {
              const backgroundResponse = await response.json();
              return backgroundResponse;
            }

            if (response.status === 403) {
              return {
                error: 403,
              };
            }

            if (response.status) {
              return {
                error: response.status,
              };
            }
          } catch (error) {
            console.error("Error fetching video: ", error);
            return null;
          }
        },
      },
      {
        path: "/backgrounds-by-season",
        element: <Season />,
      },
      // {
      //   path: "/logout-success",
      //   element: <Logout />,
      // },
    ],
  },
]);
