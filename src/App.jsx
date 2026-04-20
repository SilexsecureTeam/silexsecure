import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Homepage from "./pages/Homepage";
import Casepage from "./pages/Casepage";

function App() {
  return (
    <Router>
      <div className="min-h-screen">
        <Routes>
          <Route path="/" element={<Homepage />} />
          <Route path="/case-study" element={<Casepage />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
