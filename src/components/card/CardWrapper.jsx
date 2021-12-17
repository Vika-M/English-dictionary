import Card from "./card";
import words from "../assets/Words";
import react from "react";
import { useState } from 'react';

export default function CardWrapper(props) {
    const [indexArray, setindexArray] = useState(0);
    const [count, setCount] = useState(0);

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
    
   let heandler = () => {
    setCount(count + 1);
   }

    return (
        <>
        <div>Количество изученных слов {count}  </div>
        <div  className="App1" >
      <div>
          <button className="btnDown"  onClick={sliderLeft}  >Назад</button>
      </div>
          
        <Card  english={words[indexArray].english}  transcription={words[indexArray].transcription} russian={words[indexArray].russian} tags={words[indexArray].tags}  heandler={heandler} > </Card>
          
        <div>
           <button className="btnUp" onClick={sliderRight} >Вперед</button>
         </div>
     </div>
     <div>{indexArray+1 + '/' + words.length}</div>
     </>
    )


}