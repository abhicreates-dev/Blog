
import React from 'react';

import { Link } from "react-router-dom";
import pi from "/pi1.png";


function Home() {
  return (
    <div style={{alignItems: "center", justifyContent: "center"}}>
      <Navb />
      <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', minHeight: '50vh', flexDirection: "column" }}>
        <h1>Abhi Salunke</h1>
        <text style={{ fontSize: "1.2rem"}}>See how I build, code, feel <br/> caz I m just like you and writing everything on behalf of you </text>
    </div>
    <Goto/>
    </div>
  )
}

function Navb(){
  return(
    <nav style={{display: "flex", alignItems:"center", justifyContent:"space-between", marginBottom: "50px", marginTop: "0px", paddingTop: "0px"}}>
      <ul style={{display: "flex"}}>
        <li><Link to="/ " style={{ textDecoration: "none", color: "inherit" }}>Home</Link></li>
        <li>Projects</li>
        <li>Blogs</li>
        <li>About</li>
      </ul>
      <a  href='https://x.com/AbhiSal71141561' target="_blank" rel="noopener noreferrer"><button>
        Contact me
      </button></a>
    </nav>
  )

}

function Goto(){
  return (
    <Link to="/blog1" style={{ textDecoration: "none", color: "inherit" }} >
    <div style={{ display:"flex", marginTop:"10%", flexDirection:"column", width:"400px", textAlign:"start", justifyContent:"center", alignItems:"center"}}>
    <div style={{height:"225px", width:"400px"}}>
      <img src={pi} style={{height:"100%", width:"100%"}} alt='goto'/>
    </div>
    <div>
    <div style={{marginTop:"20px", fontSize:"1.3rem"}}>
       <h3 style={{ margin: 0, textAlign: "start"}}>WHY and HOW to use WSL in your windows laptop</h3>
    </div>
    <p style={{marginTop:"10px", fontSize:"15px", fontWeight: "400", opacity: 0.8, textAlign:"justify" }}>In this blog post, we will explore the benefits of using Windows Subsystem for Linux (WSL) also this will actual</p>
    <p style={{marginTop:"10px", fontSize:"15px", fontWeight: "400", opacity: 0.8, textAlign:"justify" }}>01 Aug 2025 . 15 min read</p>
    </div>
    </div>
    </Link>
  )
}




export default Home;
export { Navb};
