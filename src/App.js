import { Header, Footer, Sidebar } from './layouts/index';
import Router from './routes/Router';

function App() {
  return (
    <div>
         <Header />
         <Sidebar />
         <Router />
         <Footer /> 
    </div>
  );
}

export default App;
