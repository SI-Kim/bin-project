import React from "react";
import { Route, Routes } from "react-router-dom";
import { MainContainer } from "../containers";

export default function Router() {
  return (
    <div className="Router" >
        <Routes>
            <Route
                path="/"
                component={MainContainer}
            />
      </Routes>
    </div>
  );
};