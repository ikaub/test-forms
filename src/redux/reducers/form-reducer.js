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
            const index = state.tableRows.findIndex(obj => obj.id === action.payload);
            const newRows = state.tableRows.slice(index + 1).map(obj => {
                obj.id -= 1;
                return obj;
            });
            return {
                ...state,
                tableRows: [...state.tableRows.slice(0, index), ...newRows]
            }
        default:
            return state;
    }
}

export default formReducer;