import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "./Pages/Home/Home";
import Header from "./Components/Header/Header";
import "./App.css"; // Importing CSS file at the beginning
import "bootstrap/dist/css/bootstrap.min.css"
function App() {
  return (
    <div className="App"> {/* Adding a class name to the root element */}
      <BrowserRouter>
        <Header />
        <Routes>
          <Route path="/" element={<Home />} /> {/* Removing exact prop */}
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
