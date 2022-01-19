import words from "../assets/Words";
import App from "../../App";
import { useState } from "react";
import react from "react";

function InputWords(props) {
  const [inputs, setInputs] = useState({
    english: "",
    transcription: "",
    russian: "",
    tags: "",
  });

  //   const [newEnglish, setNewEnglish] = useState();
  //   const [newTranscription, setNewTranscription] = useState();
  //   const [newRussian, setNewRussian] = useState();
  //   const [newTags, setNewTags] = useState();

  // const  handleNewEnglish = (e) => {
  //   setNewEnglish(e.target.value);
  // }

  // const handleNewTranscription = (e) => {
  //   setNewTranscription(e.target.value);
  // }

  // const handleNewRussian = (e) => {
  //   setNewRussian(e.target.value);
  // }

  // const handleNewTags = (e) => {
  //   setNewTags(e.target.value);

  // }
  const handleInputChange = (e) => {
    setInputs((inputs) => ({ ...inputs, [e.target.name]: e.target.value }));
  };

  const addWords = () => {
    // if (e) { e.preventDefault()
    //}   я предполагала, что это строка очистит инпуты
    /* if(e.target.value === '')
        {alert('Заполните все строки')}*/
    if (inputs.english === "") {
      alert('Не заполнено поле "Слово"');
    } else {
      const newWord = {
        english: inputs.english,
        transcription: inputs.transcription,
        russian: inputs.russian,
        tags: inputs.tags,
      };

      const newArray = [...words];

      newArray.push(newWord);

      props.updateNewArray(newArray);
    }
  };

  return (
    <>
      <tr>
        <td>
          <input
            type="text"
            id="english"
            onChange={(e) => handleInputChange(e)}
            value={inputs.english}
            name="english"
          />{" "}
        </td>
        <td>
          <input
            type="text"
            id="transcription"
            onChange={(e) => handleInputChange(e)}
            value={inputs.transcription}
            name="transcription"
          />
        </td>
        <td>
          <input
            type="text"
            id="russian"
            onChange={(e) => handleInputChange(e)}
            value={inputs.russian}
            name="russian"
          />
        </td>
        <td>
          <input
            type="text"
            id="tags"
            onChange={(e) => handleInputChange(e)}
            value={inputs.tags}
            name="tags"
          />
        </td>
        <td>
          <button id="button" onClick={addWords}>
            Добавить
          </button>
        </td>
      </tr>
    </>
  );
}

export default InputWords;
