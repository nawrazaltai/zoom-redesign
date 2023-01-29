import { useState } from "react";
import Navbar from "./Navbar";
import MainContent from "./MainContent";
import Footer from "./Footer";

function App() {
  return (
    <div className="font-open-sans">
      <Navbar />
      <MainContent />
      <Footer />
    </div>
  );
}

export default App;
