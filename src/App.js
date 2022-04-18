import { useEffect } from "react";
import { Navigate, Route, Routes, useLocation } from "react-router-dom";
import About from "./components/About";
import Blog from "./components/Blog";
import Checkout from "./components/Checkout";
import Footer from "./components/Footer";
import Header from "./components/Header";
import Home from "./components/Home";
import Login from "./components/Login";
import NotFound from "./components/NotFound";
import Register from "./components/Register";


function App() {
  const { pathname } = useLocation();
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);


  return (
    <div className="">

      <Header/>

      <Routes>
        <Route path="/home" element={<Navigate to='/'/>}/>
        <Route path="/" element={<Home/>}/>
        <Route path="/checkout" element={<Checkout/>}/>
        <Route path="/checkout/:id" element={<Checkout/>}/>
        <Route path="/blog" element={<Blog/>}/>
        <Route path="/about" element={<About/>}/>
        <Route path="/login" element={<Login/>}/>
        <Route path="/register" element={<Register/>}/>
        <Route path="/*" element={<NotFound/>}/>
      </Routes>

      <Footer/>

    </div>
  );
}

export default App;
