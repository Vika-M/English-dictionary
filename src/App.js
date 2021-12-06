import logo from './logo.svg';
import './App.scss';
import Card from './components/card/card';
import Table from './components/table/table';
import words from './components/assets/Words';
import Header from './components/header/header';
import { useState } from 'react';
import {
  BrowserRouter,
  Switch,
  Route,
  Link
} from 'react-router-dom'; 



function App() {
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
    <BrowserRouter>
    <div className="App"> 
    <Header></Header>
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
   <div  className="App2" >
    <Table></Table>
    <main>
    <Switch>
      <Route path='/card' >
        <Card></Card>
      </Route>
      <Route path='/table' >
      <Table></Table>
      </Route>
    </Switch>
    </main>
    </div>
    </div>
    </BrowserRouter>
  );
  
}

export default App;
