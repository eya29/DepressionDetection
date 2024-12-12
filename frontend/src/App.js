import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'; // Renamed for consistency
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css'; // Bootstrap import should stay here
// import Login from './Login'; // Make sure the file exists and path is correct
// import Signup from './Signup'; // Ensure Signup component is correctly imported
import Home from './Home'; // Verify Home component exists
import PHQ9App from './phq9'; // Ensure the `phq9` component is properly defined and imported
import Dashboard from './text-analy'; // Dashboard component import
import Footer from './footer'; // Footer component
import Navbar from './navbar'; // Navbar component

function App() {
  return (
    <Router>
      <div style={{ display: "flex", flexDirection: "column", minHeight: "100vh" }}>
        <Navbar /> {/* Navbar is included */}
        <main style={{ flex: "1" }}>
          <Routes>
            <Route path="/" element={<Home />} /> {/* Login Route */}
            {/* <Route path="/signup" element={<Signup />} /> Signup Route */}
            <Route path="/home" element={<Home />} /> {/* Home Route */}
            <Route path="/phq9" element={<PHQ9App />} /> {/* PHQ9 Test Route */}
            <Route path="/text-analysis" element={<Dashboard />} /> {/* Dashboard Route */}
          </Routes>
        </main>
        <Footer /> {/* Footer is included */}
      </div>
    </Router>
  );
}

export default App;
