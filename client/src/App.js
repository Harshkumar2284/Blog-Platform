import Dashboard from "./components/Dashboard/Dashboard";
import Write from "./components/Dashboard/Write";
import Navbar from "./components/Navbars/Navbar";
import {BrowserRouter as Router, Routes, Route} from 'react-router-dom'
import Read from "./components/Read";
import HomePic from "./components/HomePic";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<div>
          <Navbar />
          <HomePic />
        </div>} />
        <Route path="/dashboard" element={<Dashboard />} />
        <Route path="/write" element={<Write />} />
        <Route path="/read/:id" element={<Read />} />
      </Routes>
    </Router>
  );
}

export default App;
