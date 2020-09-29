import React from 'react';
import Form from "./components/form/form.component";
import Table from "./components/table/table.component";
import {Row} from "react-bootstrap";

function App() {
    return (
        <Row>
            <Form/>
            <Table/>
        </Row>
    );
}

export default App;
