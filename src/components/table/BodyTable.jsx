


function BodyTable(props) {
    const { english, transcription, russian, tags } = props;
    return (
        <div>

            <tr>
                <td>{english}</td>
                <td>{transcription}</td>
                <td>{russian}</td>
                <td>{tags}</td>
            </tr>
        </div>
    )
}

export default BodyTable