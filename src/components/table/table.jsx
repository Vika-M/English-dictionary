import BodyTable from "./BodyTable";
import HeadTable from "./HeadeTable";
import words from "../assets/Words";
import "./_table.scss"



function Table(props) {

    const { english, transcription, russian, tags } = props;
    return (

        <div className="tableWrapper">
            <table className="table" >
                <HeadTable></HeadTable>
                <tbody className="tbody"   >
                    {
                        words.map((word) =>
                            <BodyTable english={word.english} transcription={word.transcription} russian={word.russian} tags={word.tags}  ></BodyTable>
                        )
                    }
                </tbody>

            </table>

        </div>
    )
}

export default Table