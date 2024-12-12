import React from 'react';
import { Container, Row, Col, Button } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';

const Home = () => {
  return (
    <Container fluid className="home-page" style={{ marginTop: '50px' }}>
      <Row className="align-items-center">
        {/* Description Section */}
        <Col md={6} className="text-center text-md-left">
          <h1>Welcome to Our Platform</h1>
          <p className="lead" style={{ fontSize: '1.2em', color: '#555' }}>
            Our platform provides tools to assess your mental health, such as the PHQ-9 test and depression detection analysis.
            Join us today and start understanding your well-being.
          </p>
          <div className="d-flex justify-content-center justify-content-md-start">
            <Button href="/phq9" variant="primary" size="lg" className="mr-3">
              Take PHQ-9 Test
            </Button>
            <Button href="/text" variant="outline-secondary" size="lg">
              Write & Analyze
            </Button>
          </div>
        </Col>

        {/* Image Section */}
        <Col md={6} className="text-center">
          <img
            src="https://via.placeholder.com/500x300" // Replace with your desired image URL
            alt="Mental Health Illustration"
            className="img-fluid rounded shadow"
            style={{ maxWidth: '100%' }}
          />
        </Col>
      </Row>
    </Container>
  );
};

export default Home;











// import React from 'react'
// import { useNavigate } from "react-router-dom";

// export const Home = () => {
//     const navigate = useNavigate();
  
    
//       return (
//         <div style={{ display: "flex", flexDirection: "column", minHeight: "100vh" }}>
//           {/* Navbar */}
//           <nav
//             style={{
//               backgroundColor: "#4CAF50",
//               color: "white",
//               padding: "10px 20px",
//               display: "flex",
//               justifyContent: "space-between",
//               alignItems: "center",
//             }}
//           >
//             <div className="logo" style={{ fontSize: "1.5rem", fontWeight: "bold" }}>
//               Depression Detector
//             </div>
//             <div>Helping You Understand Mental Health</div>
//           </nav>
    
//           {/* Main Content */}
//           <main style={{ flex: 1, display: "flex", flexDirection: "column", alignItems: "center", justifyContent: "center" }}>
//             <h1>Welcome to Depression Detection</h1>
//             <p>Choose an option below to get started:</p>
//             <div style={{ marginTop: "20px" }}>
//               <button
//                 onClick={() => navigate("/phq9")}
//                 style={{
//                   padding: "10px 20px",
//                   margin: "10px",
//                   fontSize: "1rem",
//                   cursor: "pointer",
//                   backgroundColor: "#4CAF50",
//                   color: "white",
//                   border: "none",
//                   borderRadius: "5px",
//                 }}
//               >
//                 Take PHQ-9 Test
//               </button>
//               <button
//                 onClick={() => navigate("/text-analysis")}
//                 style={{
//                   padding: "10px 20px",
//                   margin: "10px",
//                   fontSize: "1rem",
//                   cursor: "pointer",
//                   backgroundColor: "#2196F3",
//                   color: "white",
//                   border: "none",
//                   borderRadius: "5px",
//                 }}
//               >
//                 Write Text for Analysis
//               </button>
//             </div>
//           </main>
    
//           {/* Footer */}
//           <footer
//             style={{
//               backgroundColor: "#4CAF50",
//               color: "white",
//               textAlign: "center",
//               padding: "10px 0",
//             }}
//           >
//             &copy; {new Date().getFullYear()} Depression Detection. All rights reserved.
//           </footer>
//         </div>
      
//   )
// }

// export default Home;