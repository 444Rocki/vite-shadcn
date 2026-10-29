import { AuthLayout } from "../components/layout/AuthLayout";
import { Outlet } from "react-router-dom";
import Login from '../pages/login';
import Signup from '../pages/signup';
import { ForgotPasswordPage } from '../pages/ForgotPassword';
import { ProtectedRoutes } from '../routes/protected-routes';
import { Dashboard } from '../pages/dashboard';

const routes = [
  {
    path: "/",
    element: (
      <AuthLayout>
        <Outlet />
      </AuthLayout>
    ),
    children: [
      {
        path: "/",
        element: <Login />,
      },
      {
        path: "/signup",
        element: <Signup />,
      },
      {
        path: "/forgotpassword",
        element: <ForgotPasswordPage />,
      },
    ],
  },
  {
    path: "/dashboard",
    element: <ProtectedRoutes />,
    children: [
      {
        path: "/dashboard",
        element: <Dashboard />,
      },
    ],
  },
];

export default routes;