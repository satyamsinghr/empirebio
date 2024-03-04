import './App.css';
import Routing from './route';
import { BrowserRouter } from "react-router-dom";
import Header from './Layout/Header';
import Footer from './Layout/Footer';
function App() {
  return (
    <BrowserRouter>
     <Header />
     <Routing />
     <Footer />
  </BrowserRouter>
  );
}

export default App;
