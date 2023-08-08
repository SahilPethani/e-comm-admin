import React, { lazy } from "react";
import { Routing } from "./constants/routing";
import {
  BrowserRouter as Router,
  Route,
  // Switch,
  // Redirect,
  Routes,
} from "react-router-dom";
import { ToastContainer } from "react-toastify";
import MainLayout from "../layout/MainLayout";
import NoteExit404 from "../layout/404";
const Login = lazy(() => import("../pages/login/Login"));
const Dashboard = lazy(() => import("../pages/dashboard/Dashboard"));
const Product = lazy(() => import("../pages/products/Products"));
const Coupon = lazy(() => import("../pages/Coupon/Coupon"));

const routes = [
  {
    path: Routing.Initial,
    component: Login,
    isPrivateRoute: false,
  },
  {
    path: Routing.Login,
    component: Login,
    isPrivateRoute: false,
  },
  {
    path: Routing.Dashboard,
    component: Dashboard,
    isPrivateRoute: true,
  },
  {
    path: Routing.Product,
    component: Product,
    isPrivateRoute: true,
  },
  {
    path: Routing.Coupon,
    component: Coupon,
    isPrivateRoute: true,
  },
];
const AppRouting = () => {
  return (
    <Router>
      <ToastContainer theme="light" />
      <Routes>
        {routes
          .filter((route) => !route.isPrivateRoute)
          .map((route, index) => {
            return (
              <Route
                key={index}
                path={route.path}
                element={<route.component />}
              />
            );
          })}
      </Routes>
      <Routes>
        {routes
          .filter((route) => route.isPrivateRoute)
          .map((route, index) => {
            return (
              <Route
                key={index}
                path={route.path}
                element={
                  <MainLayout>
                    <route.component />
                  </MainLayout>
                }
              />
            );
          })}
        <Route path="*" element={<NoteExit404 />} />

      </Routes>
    </Router>
  );
};

export default AppRouting;
