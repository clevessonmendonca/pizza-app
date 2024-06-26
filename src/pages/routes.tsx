import { createBrowserRouter } from "react-router-dom";

import { AppLayout } from "./_layouts/app";
import { AuthLayout } from "./_layouts/auth";
import { SignIn } from "./auth/sign-in";
import { SignUp } from "./auth/sign-up";
import { Orders } from "./app/orders/orders";
import { Dashboard } from "./app/dashboard/dashboard";
import { NotFound } from "./app/404";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <AppLayout />,
    errorElement: <NotFound />,
    children: [
      { path: "/", element: <Dashboard /> },
      { path: "/orders", element: <Orders /> },
    ],
  },
  {
    path: "/",
    element: <AuthLayout />,
    children: [
      { path: "/sign-in", element: <SignIn /> },
      { path: "/sign-up", element: <SignUp /> },
    ],
  },
]);
