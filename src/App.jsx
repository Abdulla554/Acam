import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "./pages/Home/home";
import Navbar from "./components/Navbar/Navbar";
import Course from "./components/Services/Item";
import Info from "./components/Services/Info";




const App = () => {
return (
  <BrowserRouter>
      <Navbar />
  <Routes>
    <Route path="/" element={  <Home/>}/>
    <Route path="/courses/:id" element={  <Course/>}/>
    <Route path="/info" element={  <Info/>}/>
  </Routes>

  </BrowserRouter>

  );
};

export default App;
