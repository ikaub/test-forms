export const fields = ['First Name', 'Last Name', 'Phone Number', 'Gender', 'Age'];

export const initialState = {
    firstName: '',
    lastName: '',
    phoneNumber: '',
    gender: '',
    age: ''
};

export const validatedFields = {
    firstName: true,
    lastName: true,
    phoneNumber: true,
    gender: true,
    age: true
};

export const genders = ['m', 'f', 'male', 'female'];

export const compareValues = (field, sorting) => {
    return (obj1, obj2) => {
        if (obj1[field] > obj2[field])
            return sorting === 'asc' ? 1 : -1;
        else if (obj1[field] === obj2[field])
            return 0;
        return sorting === 'asc' ? -1 : 1;
    }
}
