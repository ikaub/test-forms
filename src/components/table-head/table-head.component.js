import React from "react";
import {fields, initialState} from "../../utils/utils";
import './table-head.styles.scss';

const TableHead = ({sort}) => {

    return (
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
            <th> </th>
            {Object.keys(initialState).map((key) => (
                <th key={key}>
                    <span onClick={e => sort('asc', e)} id={key} className='sort'>Asc</span>|
                    <span onClick={e => sort('desc', e)} id={key} className='sort'>Desc</span>
                </th>
            ))}
        </tr>
        </thead>
    );
}

export default TableHead;