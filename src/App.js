import Hero from "./pages/app/hero/Hero";
import Nav from "./components/nav/Nav";
import Chapter from "./pages/app/chapter/Chapter";
import Courses from "./pages/app/courses/Courses";
import Details from "./pages/app/details/Details";
import Learn from "./pages/app/learn/Learn";
import Page404 from "./pages/misc/Page404/Page404";

import { createBrowserRouter, RouterProvider } from "react-router-dom";

function App() {
  const browserRouter = createBrowserRouter([
    {
      path: "",
      element: <Nav />,
      errorElement: <Page404 />,
      children: [
        { index: true, element: <Hero /> },
        {
          path: "/courses",
          children: [
            { index: true, element: <Courses /> },
            {
              path: ":courseId",
              children: [{ index: true, element: <Details /> }],
            },
          ],
        },
        {
          path: "/learn/:courseId",
          element: <Learn />,
          children: [{ path: "chapter/:chapterId", element: <Chapter /> }],
        },
      ],
    },
  ]);
  return <RouterProvider router={browserRouter} />;
}
export default App;
