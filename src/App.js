import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Home from "./pages/Home";
import Catergory from "./pages/Category";
import Detail from "./pages/Detail";
import Login from "./pages/Login";
import NewThing from "./pages/NewThing";
import Ranking from "./pages/Ranking";
import Register from "./pages/Register";
import Sale from "./pages/Sale";
import Page404 from "./pages/Page404";

const App = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/category" element={<Catergory />} />
        <Route path="/detail" element={<Detail />} />
        <Route path="/newthing" element={<NewThing />} />
        <Route path="/ranking" element={<Ranking />} />
        <Route path="/sale" element={<Sale />} />
        <Route path="/auth/login" element={<Login />} />
        <Route path="/auth/register" element={<Register />} />
        <Route path="*" element={<Page404 />} />
      </Routes>
    </Router>
  );
};

export default App;
