import "./_table.scss"


function BodyTable(props) {
    const { english, transcription, russian, tags } = props;
    return (
        <div>

            <tr className='table-rows' >
                <td>{english}</td>
                <td>{transcription}</td>
                <td>{russian}</td>
                <td>{tags}</td>
            </tr>
        </div>
    )
}

export default BodyTable