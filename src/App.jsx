// src/App.jsx
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import Navbar from "./components/Navbar";
import LandingPage from "./pages/LandingPage"; // Import LandingPage
import CalendarPage from "./pages/CalendarPage";
import FitnessTracking from "./pages/FitnessTracking";
import HospitalConnect from "./pages/HospitalConnect";
import CheckupBooking from "./pages/CheckupBooking";

function App() {
  return (
    <Router>
      <div className="flex flex-col min-h-screen">
        <Navbar />
        <div className="flex-grow p-6">
          <Routes>
            <Route path="/" element={<LandingPage />} /> {/* Default route */}
            <Route path="/calendar" element={<CalendarPage />} />
            <Route path="/fitness-tracking" element={<FitnessTracking />} />
            <Route path="/hospital-connect" element={<HospitalConnect />} />
            <Route path="/checking-booking" element={<CheckupBooking />} />
          </Routes>
        </div>
      </div>
      <ToastContainer />
    </Router>
  );
}

export default App;
