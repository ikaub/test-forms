import React from "react";

const TableRow = ({data, index}) => {
    return (
        <tr>
            <th scope='row'>{index}</th>
            {Object.values(data).map(field => <td key={field}>{field}</td>)}
        </tr>
    );
}

export default TableRow;