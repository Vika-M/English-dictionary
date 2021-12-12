import logo from './logo.svg';
import './App.scss';
import Card from './components/card/card';
import Table from './components/table/table';
import words from './components/assets/Words';
import Header from './components/header/header';
import CardWrapper from './components/card/CardWrapper';
import { useState } from 'react';
import {
  BrowserRouter,
  Routes,
  Route,
  Link
} from 'react-router-dom'; 
import Error from './components/Error';


function App() {
 

  return (
    <BrowserRouter>
    <div className="App"> 
    <Header></Header>
    <main>
    <Routes>
      <Route exact path='/card' element={<CardWrapper></CardWrapper>}>
      </Route>
      <Route exact path='/table' element={<Table></Table>} >
        
      </Route>
      <Route path='/'>Главная страница</Route>
      <Route path="*"  element={<Error/>} >
      
      </Route>
    </Routes>
    </main>
    </div>
    
    </BrowserRouter>
  );
  
}

export default App;
