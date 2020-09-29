import React, {useState} from "react";
import {Col} from "react-bootstrap";
import FormInput from "../form-input/form-input.component";
import './form.styles.scss';
import CustomButton from "../custom-button/custom-button.component";

const fields = ['First Name', 'Last Name', 'Phone Number', 'Gender', 'Age']

const Form = () => {

    const [inputState, setInputState] = useState({
        firstName: '',
        lastName: '',
        phoneNumber: '',
        gender: '',
        age: ''
    });

    const onChange = (event) => {
        setInputState({...inputState, [event.target.name]: event.target.value});
    }

    const onClick = () => {

    }

    return (
        <Col xs={6} className='form'>
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
                        />
                    ))
                }
            </form>
            <CustomButton onClick={onClick}>Submit</CustomButton>
        </Col>
    );
}

export default Form;
