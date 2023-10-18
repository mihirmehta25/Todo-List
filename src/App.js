import React from "react";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import AddH from "./AddH";
import DisplayH from "./DisplayH";
import Edit from './Edit';
import Delete from "./Delete";

function App() {
  return (
    <div>
      <center>
      <Router>
        <h6><Link to="/AddH"> AddH </Link> |<Link to="/DisplayH"> DisplayH </Link></h6>
        <Routes>
          <Route path="/" element={<AddH />} />
          <Route path="/AddH" element={<AddH />} />
          <Route path="/DisplayH" element={<DisplayH />} />
          <Route path="/Edit/:id" element={<Edit />} />
          <Route path="/Delete" element={<Delete />} />
        </Routes>
      </Router>
      </center>
    </div>
  );
}

export default App;