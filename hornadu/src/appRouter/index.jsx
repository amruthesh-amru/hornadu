import { Route, Routes } from "react-router-dom";
import Home from "../pages/Home";
import Temple from "../pages/Temple";
import BookRoom from "../pages/BookRoom";
import HowToReach from "../pages/HowToReach";
import TempleTimings from "../pages/TempleTimings";
import Deities from "../pages/Deities";
import History from "../pages/History";
import SevaDetails from "../pages/SevaDetails";
import BankDetails from "../pages/BankDetails";

const AppRouter = () => {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/temple" element={<Temple />} />
      <Route path="/bookRoom" element={<BookRoom />} />
      <Route path="/howToReach" element={<HowToReach />} />
      <Route path="/templeTiming" element={<TempleTimings />} />
      <Route path="/deities" element={<Deities />} />
      <Route path="/history" element={<History />} />
      <Route path="/sevaDetails" element={<SevaDetails />} />
      <Route path="/bankDetails" element={<BankDetails />} />
    </Routes>
  );
};
export default AppRouter;
