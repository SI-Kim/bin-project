import React from "react";
import { Route, Routes } from "react-router-dom";
import { MainContainer } from "../containers";
import "../styles/layouts.css";

export default function Router(): JSX.Element {
  return (
    <div className="page">
      <Routes>
        <Route path='/' component={MainContainer} />
      </Routes>
    </div>
  );
}
