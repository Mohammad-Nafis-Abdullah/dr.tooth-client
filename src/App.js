import { Navigate, Route, Routes } from "react-router-dom";
import About from "./components/About";
import Blog from "./components/Blog";
import Checkout from "./components/Checkout";
import Footer from "./components/Footer";
import Header from "./components/Header";
import Home from "./components/Home";
import NotFound from "./components/NotFound";


function App() {


  return (
    <div className="">

      <Header/>

      <Routes>
        <Route path="/home" element={<Navigate to='/'/>}/>
        <Route path="/" element={<Home/>}/>

        
        <Route path="/checkout" element={<Checkout/>}/>
        <Route path="/blog" element={<Blog/>}/>
        <Route path="/about" element={<About/>}/>
        <Route path="/*" element={<NotFound/>}/>
      </Routes>

      <Footer/>

    </div>
  );
}

export default App;
