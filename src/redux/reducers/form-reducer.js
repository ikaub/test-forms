import {ADD_NEW_ROW, DELETE_ROW} from "../actions/actions";

const INITIAL_STATE = {
    tableRows: []
};

const formReducer = (state = INITIAL_STATE, action) => {
    switch (action.type) {
        case ADD_NEW_ROW:
            const row = {id: state.tableRows.length + 1};
            Object.assign(row, action.payload);
            return {
                ...state,
                tableRows: [...state.tableRows, row]
            };
        case DELETE_ROW:
            return {
                ...state,
                tableRows: state.tableRows.filter(obj => obj.id !== action.payload)
            }
        default:
            return state;
    }
}

export default formReducer;