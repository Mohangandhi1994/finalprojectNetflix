import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import "./App.css";
import Footer from "./components/Footer/Footer";
import Home from "./pages/Home";
import NetflixShow from "./pages/NetflixShow";
import ScrollToTop from "./components/ScrollToTop/ScrollToTop";
import Login from "./pages/Login";
import Register from "./pages/Register";
import MovieDetails from "./components/movie/movieview";
import Profile from "./pages/Profile";

function App() {
  return (
    <BrowserRouter> 
      <div className="App">
      <ScrollToTop/>
      <Routes>
        <Route path="/" element={<Home />}/>
        <Route path="/netflix-show" element={<NetflixShow/>} />
        <Route path="/login" element={<Login/>} />
        <Route path="/register" element={<Register/>} />
        <Route path="/movie-detail/:id" element={<MovieDetails/>} />
        <Route path="/profile/:id" element={<Profile/>} />
        
      </Routes>
      <Footer/>
      </div>
    </BrowserRouter>
  );
}

export default App;
