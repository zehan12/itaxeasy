import React, { useState } from "react";
import Header from "./Components/Header";
import { Route, Routes } from "react-router-dom";
import Signin from "./Pages/Signin";
import About from "./Pages/About";

function App() {
  const [ isLogin, setIsLogin ] = useState(false);

  const handleLogin = () => {
    setIsLogin(true)
    console.log("using login thing")
  }

  const handleLogout = ( ) => {
    setIsLogin(false)
  }

  return (
    <div className="App" style={{display: isLogin ? "" : "flex"}} >
      <Header isLogin={isLogin} handleLogin={handleLogin} handleLogout={handleLogout} />
      <Routes>
        <Route path="/" element={ isLogin ?  <About /> : <Signin isLogin={isLogin}  handleLogin={handleLogin} /> } />
        <Route path="/signin" element={<Signin isLogin={isLogin} handleLogin={handleLogin} />} />
      </Routes>
    </div>
  );
}

export default App;
