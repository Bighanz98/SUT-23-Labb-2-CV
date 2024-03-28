import React, { useState } from "react";
import Home from "./Home.jsx";
import Portfolio from "./Portfolio.jsx";
import './index.css'; 

function App() {
  const [currentPage, setCurrentPage] = useState("home");

  
  const navigateTo = (page) => {
    setCurrentPage(page);
  };

  
  return (
    <div>
      <header>
        <nav className="navbar"> {}
          <button className="navbar-link larger-text " onClick={() => navigateTo("home")}>Startsida</button>
          <button className="navbar-link larger-text" onClick={() => navigateTo("portfolio")}>Portfolio</button>
        </nav>
      </header>
      <main>
        {currentPage === "home" && <Home />}
        {currentPage === "portfolio" && <Portfolio />}
      </main>
      <footer>
        <p>© 2024 Anton CV. Alla rättigheter förbehållna.</p>
      </footer>
    </div>
  );
}

export default App;