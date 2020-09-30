import {ADD_NEW_ROW} from "../actions/actions";

const INITIAL_STATE = {
    tableRows: []
};

const formReducer = (state = INITIAL_STATE, action) => {
    switch (action.type) {
        case ADD_NEW_ROW:
            return {
                ...state,
                tableRows: [...state.tableRows, action.payload]
            };
        default:
            return state;
    }
}

export default formReducer;