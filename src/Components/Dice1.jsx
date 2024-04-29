import img1 from './img/dice1.png';
import img2 from './img/dice2.png';
import img3 from './img/dice3.png';
import img4 from './img/dice4.png';
import img5 from './img/dice5.png';
import img6 from './img/dice6.png';
import React from 'react'
import { useState } from 'react';

const Dice1 = () => {
    const [currentImage, setCurrentImage] = useState(img1); 
    const imagesArray = [img1, img2, img3, img4, img5, img6];

    const changeImage=()=>{
        const randomIndex = Math.floor(Math.random() * imagesArray.length);
        console.log(randomIndex);
    setCurrentImage(imagesArray[randomIndex]);


}
  
  return (
    <div className='classDice1'>

      <img src={currentImage} alt="Dice1" onClick={changeImage}/>
    </div>
  );

 }
 

  

export default Dice1;