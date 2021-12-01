import React from 'react';
import { useState } from 'react';
import './_card.scss';
import '../assets/Words';



function Card(props) {
    const [pressed, setPressed] = useState(false);
    const handleChange = () => {
        setPressed(!pressed);
    }


    const { english, transcription, russian, tags } = props;
    return (<React.Fragment>



        <div div className="cardWrapper" >

            <div className="cardEnglish">{english}</div>
            <div className="cardTranscription">{transcription}</div>

            <div className="cardTags">{tags}</div>
            <button onClick={handleChange} className="cardButton">{pressed ? [russian] : 'Проверить'}</button>

        </div >

    </React.Fragment>
    )
}

export default Card