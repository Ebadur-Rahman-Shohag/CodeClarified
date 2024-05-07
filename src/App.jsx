import { RouterProvider, createBrowserRouter } from "react-router-dom";
import HomeLayout from "./Pages/HomeLayout";
import Error from "./Pages/Error";
import Landing from "./Pages/Landing";
import JavaScript from "./Pages/JavaScript";
import ReactJs from "./Pages/ReactJs";
import NodeJs from "./Pages/NodeJs";
import ErrorElement from "./components/ErrorElement";

const router = createBrowserRouter([
  {
    path: "/",
    element: <HomeLayout />,
    errorElement: <Error />,
    children: [
      {
        index: true,
        element: <Landing />,
        errorElement: <ErrorElement />,
      },
      {
        path: "javascript",
        element: <JavaScript />,
        errorElement: <ErrorElement />,
      },
      {
        path: "react",
        element: <ReactJs />,
        errorElement: <ErrorElement />,
      },
      {
        path: "node",
        element: <NodeJs />,
        errorElement: <ErrorElement />,
      },
    ],
  },
]);

export default function App() {
  return <RouterProvider router={router} />;
}
