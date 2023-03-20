import React from "react";

import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import CharacterDetails from "./app/components/CharacterDetails/CharacterDetails";
import HomePage from "./app/pages/HomePage/HomePage";

function App() {
  return (
    <div>
      <Router>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/:id" element={<CharacterDetails />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
