import "./App.css";
import Navbar from "./components/Navbar";
import { BrowserRouter as Router } from "react-router-dom";
import AppRouter from "./appRouter";
import Footer from "./components/Footer";
import ReactGA from "react-ga4";

ReactGA.initialize("G-99K87R74QB");
ReactGA.send({
  hitType: "pageview",
  page: window.location.pathname,
  title: "Home Page",
});
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
