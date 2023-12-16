import React from 'react';
import logo1 from "../../assets/logo1.png"
import academia from "../../assets/academia.png"
import cafe from "../../assets/cafe.png"
import sair from "../../assets/sair.png"
import coracao from "../../assets/coracao.png"


import "../Home/style.css";


function Home() {
  return (
    <>
      <div className='mobileHome'>
        <div className="Home">

          <img className='logo' src={logo1} alt=""></img>





        </div>
        <div className="footer">
          <img src={coracao} alt=""></img>
          <img src={cafe} alt=""></img>
          <img src={academia} alt=""></img>
          <img src={sair} alt=""></img>
        </div>
      </div>
    </>  
  );  
} 
  
export default Home; 