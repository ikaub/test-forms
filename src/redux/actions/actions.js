export const ADD_NEW_ROW = 'ADD_NEW_ROW';
export const DELETE_ROW = 'DELETE_ROW';

export const addNewRow = (data) => ({
    type: ADD_NEW_ROW,
    payload: data
});

export const deleteRow = (id) => ({
    type: DELETE_ROW,
    payload: id
});