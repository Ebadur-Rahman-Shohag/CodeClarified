import { RouterProvider, createBrowserRouter } from "react-router-dom";
import HomeLayout from "./Pages/HomeLayout";
import Error from "./Pages/Error";
import Landing from "./Pages/Landing";
import JavaScript from "./Pages/JavaScript";
import ReactJs from "./Pages/ReactJs";
import NodeJs from "./Pages/NodeJs";

const router = createBrowserRouter([
  {
    path: "/",
    element: <HomeLayout />,
    errorElement: <Error />,
    children: [
      {
        index: true,
        element: <Landing />,
      },
      {
        path: "javascript",
        element: <JavaScript />,
      },
      {
        path: "react",
        element: <ReactJs />,
      },
      {
        path: "node",
        element: <NodeJs />,
      },
    ],
  },
]);

export default function App() {
  return <RouterProvider router={router} />;
}
