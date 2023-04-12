import Header from "./components/Header";
import Home from "./components/Home";
import Login from "./components/Login";
import Register from "./components/Register";
import { Route, Routes } from "react-router-dom";
import WelcomePage from "./components/WelcomePage";

function App() {
  return (
    <>
      <Header />
      <Routes>
        <Route path="" element={<Home />} />
        <Route path="login" element={<Login />} />
        <Route path="register" element={<Register />} />
        <Route path="welcome" element={<WelcomePage />} />
      </Routes>
    </>
  );
}

export default App;
