import React, {useState} from "react";
import FormInput from "../form-input/form-input.component";
import './form.styles.scss';
import CustomButton from "../custom-button/custom-button.component";
import {useDispatch} from "react-redux";
import {addNewRow} from "../../redux/actions/actions";
import {fields, initialState, validatedFields, genders} from "../../utils/utils";


const Form = () => {

    const dispatch = useDispatch();

    const [inputState, setInputState] = useState(initialState);
    const [validated, setValidated] = useState(validatedFields);

    const onChange = (event) => {
        setInputState({...inputState, [event.target.name]: event.target.value});
        prevalidate(event.target.name, event.target.value);
    }

    const onClick = () => {
        if (postvalidate()) {
            dispatch(addNewRow(inputState));
            setInputState(initialState);
        } else {
            alert('Some fields are incorrect. Try again, please.');
        }
    }

    const prevalidate = (field, value) => {
        let pattern;
        switch (field) {
            case 'phoneNumber':
                pattern = /^380[0-9]{9}$|^\+380[0-9]{9}$|^0[0-9]{9}$/;
                break;
            case 'age':
                pattern = /^[1-9][0-9]?$/;
                break;
            case 'gender':
                pattern = /^[mMaAlLeEfF]{1,6}$/;
                break;
            default:
                pattern = /^[a-zA-Z]{2,20}$/;
                break;
        }
        setValidated({...validated, [field]: !!value.match(pattern)});
    }

    const postvalidate = () => {
        let valid = true;
        const invalidFields = {};
        Object.keys(inputState).forEach(key => {
            if (!inputState[key].length) {
                valid = false;
                invalidFields[key] = false;
            }
        });
        Object.values(validated).forEach(value => {
            if (!value)
                valid = false;
        });
        if (valid) {
            valid = genders.includes(inputState.gender.toLowerCase());
            invalidFields['gender'] = valid;
        }
        if (Object.keys(invalidFields).length)
            setValidated({...validated, ...invalidFields});
        return valid;
    }

    return (
        <div className='col-6 form'>
            <span>
                Add New Data to the Table
            </span>
            <form>
                {
                    Object.keys(inputState).map((key, index) => (
                        <FormInput
                            onChange={onChange}
                            placeholder={fields[index]}
                            value={inputState[key]}
                            name={key}
                            validated={validated[key]}
                            key={index}
                        />
                    ))
                }
            </form>
            <CustomButton onClick={onClick}>Submit</CustomButton>
        </div>
    );
}

export default Form;
