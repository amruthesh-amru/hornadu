import "./App.css";
import Navbar from "./components/Navbar";
import { BrowserRouter as Router } from "react-router-dom";
import AppRouter from "./appRouter";
import Footer from "./components/Footer";

function App() {
  return (
    <>
      <Router>
        <Navbar />
        <AppRouter />
        <Footer />
      </Router>
    </>
  );
}

export default App;
