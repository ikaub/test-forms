import React, {useEffect, useState} from "react";
import {useSelector} from "react-redux";
import {compareValues} from "../../utils/utils";
import TableRow from "../table-row/table-row.component";
import './table.styles.scss';
import TableHead from "../table-head/table-head.component";

const Table = () => {
    const data = useSelector(state => state.tableRows);

    const [displayedData, setDisplayedData] = useState(data);

    const sortArray = (sorting, event) => {
        setDisplayedData([...displayedData].sort(compareValues(event.target.id, sorting)));
    }

    useEffect(() => {
        setDisplayedData(data);
    }, [data]);

    return (
        <div className='col-6 table'>
            {!displayedData.length ? <div className='no-data-label'>There is no data yet.</div> :
                <table>
                    <TableHead sort={sortArray}/>
                    <tbody>
                    {displayedData.map((item, index) => (
                        <TableRow key={index} data={item}/>
                    ))}
                    </tbody>
                </table>
            }
        </div>
    );
}

export default Table;