import React from "react";
import {useSelector} from "react-redux";
import {fields} from "../../utils/utils";
import TableRow from "../table-row/table-row.component";
import './table.styles.scss';

const Table = () => {
    const data = useSelector(state => state.tableRows);
    return (
        <div className='col-6 table'>
            {!data.length ? <div className='no-data-label'>There is no data yet.</div> :
                <table>
                    <thead>
                    <tr>
                        <th>#</th>
                        {fields.map(field => <th scope='col' key={field}>{field}</th>)}
                    </tr>
                    </thead>
                    <tbody>
                    {data.map((item, index) => (
                        <TableRow key={index} index={index + 1} data={item}/>
                    ))}
                    </tbody>
                </table>
            }
        </div>
    );
}

export default Table;