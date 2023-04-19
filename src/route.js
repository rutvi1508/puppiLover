import React from "react";

//Layouts

import ClientLayout from "src/layouts/ClientLayouts/index";
import LoginView from "src/views/pages/admin/auth/login";
import PhoneNumberPage from "src/views/pages/admin/auth/phonenumber";
import PasswordPage from "src/views/pages/admin/auth/createPassword";

export const routes = [
  {
    path: "/",
    children: [
      { path: "/loginview", element: <LoginView /> },
      { path: "/phonenumber", element: <PhoneNumberPage /> },
      { path: "/createpassword", element: <PasswordPage /> },
    ],
  },
];

export const userRoutes = [
  {
    path: "/",
    element: <ClientLayout />,
    children: [],
  },
];
