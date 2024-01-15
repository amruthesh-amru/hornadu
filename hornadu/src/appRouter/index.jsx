import { Route, Routes } from "react-router-dom";
import Home from "../pages/Home";
import Temple from "../pages/Temple";
import BookRoom from "../pages/BookRoom";
import HowToReach from "../pages/HowToReach";
import TempleTimings from "../pages/TempleTimings";
import Deities from "../pages/Deities";

const AppRouter = () => {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/temple" element={<Temple />} />
      <Route path="/bookRoom" element={<BookRoom />} />
      <Route path="/howToReach" element={<HowToReach />} />
      <Route path="/templeTiming" element={<TempleTimings />} />
      <Route path="/deities" element={<Deities />} />
    </Routes>
  );
};
export default AppRouter;
