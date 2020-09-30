import React from 'react';
import Form from "./components/form/form.component";
import Table from "./components/table/table.component";
import {Provider} from 'react-redux';
import {PersistGate} from "redux-persist/integration/react";
import './basic.styles.scss';
import {store, persistor} from "./redux/store";

function App() {
    return (
        <Provider store={store}>
            <PersistGate persistor={persistor}>
                <div className='container-fluid'>
                    <div className='row'>
                        <Form/>
                        <Table/>
                    </div>
                </div>
            </PersistGate>
        </Provider>
    );
}

export default App;
