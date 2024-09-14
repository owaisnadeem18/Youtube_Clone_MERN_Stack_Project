import React from "react";
import Navbar from "./components/Navbar";
import { Route, Routes } from "react-router-dom";
import Home from "./components/Home";
import PlayingVideo from "./components/PlayingVideo";
import Search from "./components/Search";
import Loading from "./components/Loading";
import { useAuth } from "./context/AuthProvider";

export default function App() {
  const { loading } = useAuth();

  return (
    <>
      {loading && <Loading />}
      <Navbar />
      <Routes>
        <Route path="/" exact element={<Home />} />
        <Route path="/search/:SearchQuery" element={<Search />} />
        <Route path="/video/:id" element={<PlayingVideo />} />
      </Routes>
    </>
  );
}
