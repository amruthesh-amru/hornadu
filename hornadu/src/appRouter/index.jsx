import { Route, Routes } from "react-router-dom";
import Home from "../pages/Home";
import Temple from "../pages/Temple";
import BookRoom from "../pages/BookRoom";

const AppRouter = () => {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/temple" element={<Temple />} />
      <Route path="/bookRoom" element={<BookRoom />} />
      <Route path="/howToReach" element={<Home />} />
      <Route path="/" element={<Home />} />
      <Route path="/" element={<Home />} />
    </Routes>
  );
};
export default AppRouter;
