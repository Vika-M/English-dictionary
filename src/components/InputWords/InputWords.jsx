import words from "../assets/Words";
import App from "../../App";
import { useState } from "react";



function InputWords(props) {

    const [newEnglish, setNewEnglish] = useState();
    const [newTranscription, setNewTranscription] = useState();
    const [newRussian, setNewRussian] = useState();
    const [newTags, setNewTags] = useState();
   
  const  handleNewEnglish = (e) => {
    setNewEnglish(e.target.value);
  }

  const handleNewTranscription = (e) => {
    setNewTranscription(e.target.value);
  }

  const handleNewRussian = (e) => {
    setNewRussian(e.target.value);
  }

  const handleNewTags = (e) => {
    setNewTags(e.target.value);
  }

    const addWords = () => {
       const newWord= { english: newEnglish,
        transcription: newTranscription,
        russian: newRussian,
        tags: newTags};

        const newArray = [...words];

        newArray.push(newWord);

        props.updateNewArray(newArray);
    }

    return (
        <>
    <tr>
        <td><input type="text" id="english" onChange={(e) => handleNewEnglish(e)} value={newEnglish} /> </td>
        <td><input type="text" id="transcription" onChange={(e) => handleNewTranscription(e)} value={newTranscription} /></td>
        <td><input type="text" id="russian" onChange={(e) => handleNewRussian(e)} value={newRussian} /></td>
        <td><input type="text" id="tags" onChange={(e) => handleNewTags(e)} value={newTags}  /></td>
        <td><button id="button" onClick={addWords} >Добавить</button></td>
        
    </tr>
    
    </>
)}

export default InputWords