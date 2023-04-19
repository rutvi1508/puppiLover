import React from "react";

//Layouts

import ClientLayout from "src/layouts/ClientLayouts/index";
import LoginView from "src/views/pages/admin/auth/login";
import PhoneNumberPage from "src/views/pages/admin/auth/phonenumber";
import PasswordPage from "src/views/pages/admin/auth/createPassword";
import WhyUsePage from "src/views/pages/admin/auth/whyUseApp";
import CreateAccountPage from "src/views/pages/admin/auth/createAccount";

export const routes = [
  {
    path: "/",
    children: [
      { path: "/loginview", element: <LoginView /> },
      { path: "/phonenumber", element: <PhoneNumberPage /> },
      { path: "/createpassword", element: <PasswordPage /> },
      { path: "/whyuseapp", element: <WhyUsePage /> },
      { path: "/createaccount", element: <CreateAccountPage /> },
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
