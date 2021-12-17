import BodyTable from "./BodyTable";
import HeadTable from "./HeadeTable";
import words from "../assets/Words";
import "./_table.scss";
import InputWords from "../InputWords/InputWords";
import { useState } from "react";


function Table(props) {

    const { english, transcription, russian, tags } = props;
    const [newArr, setNewArr] = useState(words);
   const  updateNewArray = (newArray) => {
    setNewArr(newArray)
   }
    return (

       
            <table className="table" >
                <HeadTable></HeadTable>
                
                <tbody className="tbody"   >
                <InputWords updateNewArray={updateNewArray} />
                    {
                        newArr.map((word) =>
                            <BodyTable english={word.english} transcription={word.transcription} russian={word.russian} tags={word.tags}  ></BodyTable>
                        )
                    }
                </tbody>

            </table>

        
    )
}

export default Table