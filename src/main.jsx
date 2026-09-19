import { StrictMode, Suspense } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App.jsx";
import { createBrowserRouter, RouterProvider } from "react-router";
import Root from "./components/Root/Root.jsx";
import Mobile from "./components/body/Mobile/Mobile.jsx";
import Home from "./components/body/Home/Home.jsx";
import Laptop from "./components/body/Laptop/Laptop.jsx";
import Users from "./components/body/Users/Users.jsx";
import Users2 from "./components/body/Users2/Users2.jsx";
import UserDetails from "./components/body/UserDetails/UserDetails.jsx";
import Posts from "./components/body/Posts/Posts.jsx";
import PostDetails from "./components/body/PostDetails/PostDetails.jsx";

// API data fetch (Type-2)
const users2Promise = fetch("https://jsonplaceholder.typicode.com/users").then(
  (res) => res.json(),
);

const router = createBrowserRouter([
  {
    path: "/",
    Component: Root,
    children: [
      { index: true, Component: Home },
      { path: "mobile", Component: Mobile },
      { path: "laptop", Component: Laptop },

      // API data fetch (Type-1)
      {
        path: "users",
        loader: () => fetch("https://jsonplaceholder.typicode.com/users"),
        Component: Users,
      },

      // API data fetch (Type-2)
      {
        path: "users2",
        element: (
          <Suspense fallback={<span>Loading....</span>}>
            <Users2 users2Promise={users2Promise}></Users2>
          </Suspense>
        ),
      },

      //----------dynamic route--------for-seemore-btn-(Users)----
      {
        path: "users/:userId",
        loader: ({ params }) =>
          fetch(`https://jsonplaceholder.typicode.com/users/${params.userId}`),
        Component: UserDetails,
      },

      //----------again dynamic route--------for seemore btn--(Posts)---
      {
        path: "posts",
        loader: () => fetch("https://jsonplaceholder.typicode.com/posts"),
        Component: Posts,
      },
      {
        path: "posts/:postId",
        loader: ({ params }) =>
          fetch(`https://jsonplaceholder.typicode.com/posts/${params.postId}`),
        Component: PostDetails,
      },
    ],
  },
]);

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <RouterProvider router={router}></RouterProvider>
  </StrictMode>,
);
