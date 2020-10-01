import React, {useEffect, useState} from "react";
import {useSelector} from "react-redux";
import {fields, initialState} from "../../utils/utils";
import TableRow from "../table-row/table-row.component";
import './table.styles.scss';

const compareValues = (field, sorting) => {
    return (obj1, obj2) => {
        if (obj1[field] > obj2[field])
            return sorting === 'asc' ? 1 : -1;
        else if (obj1[field] === obj2[field])
            return 0;
        return sorting === 'asc' ? -1 : 1;
    }
}

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
                    <thead>
                    <tr>
                        <th>#</th>
                        {fields.map(field =>
                            <th scope='col' key={field}>
                                {field}
                            </th>
                        )}
                    </tr>
                    <tr>
                        <th></th>
                        {Object.keys(initialState).map((key) => (
                            <th key={key}>
                                <span onClick={(e) => sortArray('asc', e)} id={key} className='sort'>Asc</span>|
                                <span onClick={(e) => sortArray('desc', e)} id={key} className='sort'>Desc</span>
                            </th>
                        ))}
                    </tr>
                    </thead>
                    <tbody>
                    {displayedData.map((item, index) => (
                        <TableRow key={index} index={index + 1} data={item}/>
                    ))}
                    </tbody>
                </table>
            }
        </div>
    );
}

export default Table;