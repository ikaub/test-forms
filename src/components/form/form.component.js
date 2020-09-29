import React from "react";
import {Col} from "react-bootstrap";

const Form = () => {
    return (
        <Col xs={6}>
            <form>
                <input type='text'/>
                <input type='text'/>
                <input type='phone'/>
                <input type='text'/>
                <input type='text'/>
            </form>
        </Col>
    );
}

export default Form;
