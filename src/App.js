import logo from './logo.svg';
import './App.scss';
import Card from './components/card/card';
import Table from './components/table/table';
import words from './components/assets/Words';
import Header from './components/header/header';
import ButtonUp from './components/buttonUp/ButtonUp'
import ButtonDown from './components/buttonDown/ButtonDown';


function App() {
  return (
    <div className="App"> 
    <Header></Header>
    <div  className="App1" >
      
     <ButtonDown></ButtonDown>
    {
      words.map (  (word) =>
      <Card english={word.english}  transcription={word.transcription} russian={word.russian} tags={word.tags} > </Card>
        )
      
    }
  <ButtonUp></ButtonUp>
   </div>
   <div  className="App2" >
    <Table></Table>
    </div>
    </div>
  
  );
  
}

export default App;
