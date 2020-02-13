import React from 'react';
import { Provider } from 'react-redux';
import {BrowserRouter as Router, Route} from "react-router-dom";
import store from '../ReduxStore';
import BookList from './BookList';
import EditBookForm from './EditBookForm'

const MainApp = () => {
    return (
        <Provider store={store}>
            <Router>
                <React.Fragment>
                    <Route exact path="/" component={BookList} />
                    <Route exact path="/edit" component={EditBookForm} />
                    <Route exact path="/add" component={EditBookForm} />
                </React.Fragment>
            </Router>
        </Provider>
    );
};


export default MainApp;
