import React, { useEffect } from "react";
import { BrowserRouter } from "react-router-dom";
import "./App.scss";
import Routes from "./routes/";
import Navbar from "./components/navbar";

const checkAuth = (val: number): boolean => {
  return val ? true : false;
};

const App: React.FC = () => {
  const removeTapHighlight = (e: any) => {
    if (e.detail > 1) {
      e.preventDefault();
    }
  };
  useEffect(() => {
    document.addEventListener("mousedown", e => removeTapHighlight(e));
    return () => document.removeEventListener("mousedown", e=> removeTapHighlight(e));
  }, []);
  return (
    <div className="default">
      <BrowserRouter>
        {checkAuth(0) && <Navbar />}
        <Routes />
      </BrowserRouter>
    </div>
  );
};

export default App;
