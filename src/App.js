import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import "./App.css";
// Components

// Pages
import Dashboard from "./pages/Dashboard";

function App() {
  return (
    <div className="">
      <Router>
        <Routes>
          <Route exact path="/" element={<Dashboard />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
