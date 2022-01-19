import Card from "./card";

import react from "react";
import { useState, useEffect } from "react";

export default function CardWrapper() {
  const [indexArray, setindexArray] = useState(0);
  const [count, setCount] = useState(0);
  const [error, setError] = useState(null);
  const [isLoaded, setIsLoaded] = useState(false);
  const [words, setwords] = useState([]);

  useEffect(() => {
    fetch("http://itgirlschool.justmakeit.ru/api/words")
      .then((result) => result.json())
      .then(
        (result) => {
          console.log(result);

          setwords(result);
        },
        // Примечание: важно обрабатывать ошибки именно здесь, а не в блоке catch(),
        // чтобы не перехватывать исключения из ошибок в самих компонентах.
        (error) => {
          setError(error);
        }
      );
  }, []);

  const sliderRight = () => {
    if (indexArray < words.length - 1) {
      setindexArray(indexArray + 1);
    }
  };
  const sliderLeft = () => {
    if (indexArray > 0) {
      setindexArray(indexArray - 1);
    }
  };

  let heandler = () => {
    setCount(count + 1);
  };

  if (error) {
    return <div>Ошибка: {error.message}</div>;
  } else if (words.length > 0) {
    return (
      <>
        <div>Количество изученных слов {count} </div>
        <div className="App1">
          <div>
            <button className="btnDown" onClick={sliderLeft}>
              Назад
            </button>
          </div>

          <Card
            english={words[indexArray].english}
            transcription={words[indexArray].transcription}
            russian={words[indexArray].russian}
            tags={words[indexArray].tags}
            heandler={heandler}
          >
            {" "}
          </Card>

          <div>
            <button className="btnUp" onClick={sliderRight}>
              Вперед
            </button>
          </div>
        </div>
        <div>{indexArray + 1 + "/" + words.length}</div>
      </>
    );
  }
  return <div>Loading</div>;
}
