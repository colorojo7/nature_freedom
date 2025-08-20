
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

//** PAGES **//
import LandingPage from "../pages/LandingPage";


const AppRouter = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<LandingPage />} />
     
      </Routes>
    </Router>
  );
};

export default AppRouter;
