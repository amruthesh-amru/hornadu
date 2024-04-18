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
import NearbyPlaces from "../pages/NearbyPlaces";
import DarshanaRules from "../pages/DarshanaRules";
import ContactUs from "../pages/ContactUs";
import Terms from "../pages/Terms";
import Ehundi from "../pages/Ehundi";
import EhundiContainer from "../pages/EhundiContainer";

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
      <Route path="/nearbyPlaces" element={<NearbyPlaces />} />
      <Route path="/darshanaRules" element={<DarshanaRules />} />
      <Route path="/contactUs" element={<ContactUs />} />
      <Route path="/terms" element={<Terms />} />
      <Route path="/ehundicontainer" element={<EhundiContainer />} />
    </Routes>
  );
};
export default AppRouter;
