import React from "react";
import Dashboard from "./dashboard/dashboard";
import LogIn from "./LogIn/LogIn";
import useToken from "./LogIn/useToken";
import { Route, Routes } from "react-router-dom";
import Register from "./Register/register";

function App() {
  const { token, setToken } = useToken();
  if (!token) {
    return (
      <div>
        <Routes>
          <Route path="/" element={<LogIn setToken={setToken} />} />
          <Route path="/register" element={<Register />} />
        </Routes>
      </div>
    );
  }
  return (
    <div className="wrapper">
      <Routes>
        <Route path="/" element={<Dashboard />} />
      </Routes>
    </div>
  );
}

export default App;
