import { useState } from "react";

import "./App.css";
import Navbar from "./Layout/Navbar/Navbar";
import HomePage from "./Pages/HomePage";
import Footer from "./Layout/Footer/Footer";
import { Toaster } from "react-hot-toast";

function App() {
  return (
    <>
      <Toaster />

      <Navbar />
      <HomePage />
      <Footer />
    </>
  );
}

export default App;
