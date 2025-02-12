import { createBrowserRouter } from "react-router-dom";
import App from "./App";
import Admin from "./pages/Admin/Admin";
import Background from "./pages/Background/Background";
import HomePage from "./pages/HomePage/HomePage";
import Login from "./pages/Login/Login";
import Season from "./pages/Season/Season";
import Subscribe from "./pages/Subscribe/Subscribe";

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
        path: "/admin",
        element: <Admin />,
      },
      {
        path: "/background/:id",
        element: <Background />,
        loader: async ({ params }) => {
          try {
            const response = await fetch(
              `${import.meta.env.VITE_API_URL}/api/videos/${params.id}`,
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
