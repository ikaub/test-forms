import React from "react";
import './table-row.styles.scss';
import {useDispatch} from "react-redux";
import {deleteRow} from "../../redux/actions/actions";

const TableRow = ({data}) => {

    const dispatch = useDispatch();

    const handleDelete = () => {
        dispatch(deleteRow(data.id));
    }

    return (
        <tr>
            {Object.values(data).map(field => <td key={field}>{field}</td>)}
            <td onClick={handleDelete} className='delete-mark'>&#10006;</td>
        </tr>
    );
}

export default TableRow;