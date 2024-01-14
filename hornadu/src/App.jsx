import "./App.css";
import Navbar from "./components/Navbar";
import BankDetails from "./pages/BankDetails";
import BookRoom from "./pages/BookRoom";
import Home from "./pages/Home";
import HowToReach from "./pages/HowToReach";
import NearbyPlaces from "./pages/NearbyPlaces";
import Temple from "./pages/Temple";
import TempleTimings from "./pages/TempleTimings";
import { BrowserRouter as Router } from "react-router-dom";
import AppRouter from "./appRouter";

function App() {
  return (
    <>
      <Router>
        <AppRouter />
      </Router>
    </>
  );
}

export default App;
