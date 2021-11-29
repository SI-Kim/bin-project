import * as React from "react";
import { Header, Footer } from "./layouts/index";
import Router from "./routes/Router";

function App(): React.FC {
  return (
    <div>
      <Header />
      <Router />
      <Footer />
    </div>
  );
}

export default App;
