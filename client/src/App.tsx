import { useState } from "react";
import TopBar from "./components/topBar/topBar";
import Header from "./components/header/Header";
import Home from "./pages/home/home";
import SinglePage from "./pages/singlePost/single";
import Write from "./pages/write/Write";
import Setting from "./pages/setting/setting";
import Login from "./pages/login/login";
import Register from "./pages/register/register";
import NotFound from "./pages/404/NotFound";
import Footer from "./components/footer/Footer";
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'

import "./app.scss";

function App() {
  const currentUser = true;

  return (
    <>
      <Router>
        <TopBar />
        <Routes>
          <Route path="/" element = {<Home/>}/>
          <Route path="/posts" element = {<Home/>} />
          <Route path="/Home" element = {<Home/>} />
          <Route path="/register" element = {currentUser ? <Home /> : <Register />} />
          <Route path="/login" element = {currentUser ? <Home /> : <Login />} />
          <Route path="/post/:id" element = {<SinglePage/>} />
          <Route path="/write" element = {currentUser ? <Write /> : <Login />} />
          <Route path="/settings" element = {currentUser ? <Setting /> : <Login />} />
          <Route path="*" element={<NotFound/>}/>
        </Routes>
        <Footer />
      </Router>
    </>
  );
}

export default App;