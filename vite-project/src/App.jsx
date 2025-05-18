import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
// import TwoWayAuth from "./components/TwoWayAuth";
import Todo from "./components/Todo";
import TickTackToe from "./components/TickTackToe";
import VScodeStructure from "./components/VScodeStructure";
import { struct } from "./constants/mockData";
import NavBar from "./components/NavBar";
import TwoWayAuth from "./components/TwoWayAuth";

function App() {
  return (
    <Router>
      <NavBar />
      {/* <BrowserRouter> */}
      <Routes>
        <Route path="/tickTacToe" element={<TickTackToe />} exact />
        <Route path="/" element={<Todo />} exact />
        <Route path="/auth" element={<TwoWayAuth />} />
        <Route
          path="/codestructure"
          element={<VScodeStructure ArrayStructure={struct} />}
        />
      </Routes>
    </Router>
  );
}

export default App;
