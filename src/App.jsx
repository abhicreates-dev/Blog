import "./index.css"
import './App.css'
import { BrowserRouter, Routes, Route } from "react-router";
import Blogone from './Blog1';
import Home from './pages/Home';
import WSLBlog from "./Blog1";





function App() {

  return (
    <>
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/blog1" element={<WSLBlog />} />
          </Routes>
        </BrowserRouter>

    </>
  )
}



export default App;




