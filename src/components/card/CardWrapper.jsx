import Card from "./card";
import words from "../assets/Words";

import { useState } from 'react';

export default function CardWrapper(props) {
    const [indexArray, setindexArray] = useState(0);

    const sliderRight = () => {
      if (indexArray < words.length -1 ) {
        setindexArray(indexArray+1)
    } 
    };
    const sliderLeft = () => {
       if (indexArray > 0 ) {
        setindexArray(indexArray-1)
      }
         
    } ;

    return (
        <>
        <div  className="App1" >
      <div>
          <button className="btnDown"  onClick={sliderLeft}  >Назад</button>
      </div>
          
        <Card english={words[indexArray].english}  transcription={words[indexArray].transcription} russian={words[indexArray].russian} tags={words[indexArray].tags} > </Card>
          
        <div>
           <button className="btnUp" onClick={sliderRight} >Вперед</button>
         </div>
     </div>
     <div>{indexArray+1 + '/' + words.length}</div>
     </>
    )


}