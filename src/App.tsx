import * as React from "react";
import { Header, Footer } from "./layouts/index";
import Router from "./routes/Router";

function App(): JSX.Element {
  return (
    <div>
      <Header />
      <Router />
      <Footer />
    </div>
  );
}

export default App;
