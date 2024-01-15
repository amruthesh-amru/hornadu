import "./App.css";
import Navbar from "./components/Navbar";
import { BrowserRouter as Router } from "react-router-dom";
import AppRouter from "./appRouter";

function App() {
  return (
    <>
      <Router>
        <Navbar />
        <AppRouter />
        {/* <Footer /> */}
      </Router>
    </>
  );
}

export default App;
