import React from 'react';
import './HomePage.css'


export default function HomePage() {
    return (
    <>
    <div className="all-container">
    <div id="right">
      <img className="logo" alt="" src="https://i.imgur.com/dK7TCaS.png" />
<div className="titleBar">
      <p className="title-bar-home">the LeftOver</p></div>
      <div className="tagline">
        <p>(your trash, my treasure - building a sustainable future piece by piece</p>
        </div>
        </div>

      <section id="pic-block">
      <div className='pic-cell'>
        <img id="splash-image" alt="" src="https://i.imgur.com/XemNHZT.jpg"/>
      </div>
      <div className='pic-cell'>
        <img id="splash-image" alt="" src="https://i.imgur.com/OTaIhuK.png"/>
      </div>
      </section>                               
    </div> 
      </>
	);
}
