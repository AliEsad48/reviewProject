import React from "react";
import { Route, Routes } from "react-router-dom";
import PrivateRoute from "./PrivateRoute";
import LoginPage from "../components/Login/index";
import Movies from "../pages/Movies/index";
import DetailPage from "../components/MovieDetails/index";

const CustomRoutes = () => {
  return (
    <Routes>
      <Route
        path="/movie/:movieId"
        element={
          <PrivateRoute>
            <DetailPage />
          </PrivateRoute>
        }
      />
      <Route path="/" element={<LoginPage />} />
      <Route
        path="/movies"
        element={
          <PrivateRoute>
            <Movies />
          </PrivateRoute>
        }
      />
    </Routes>
  );
};

export default CustomRoutes;
