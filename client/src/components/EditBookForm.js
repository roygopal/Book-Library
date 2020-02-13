import React from "react";
import './EditBookForm.css';
import { connect } from 'react-redux';
import {updateBookDetail, addBook} from '../actions/BookAction';

class AddBookForm extends React.Component {
    constructor(props) {
        super(props);
        let stateObj;
        if (this.props.location.state) {
            stateObj = this.props.location.state;
        }
        this.state = {
            id: stateObj ? stateObj._id : undefined,
            name: stateObj ? stateObj.name : '',
            author: stateObj ? stateObj.author : '',
            description: stateObj ? stateObj.description : '',
            total_pages: stateObj ? stateObj.total_pages : 300
        };
        this.handleDataChange = this.handleDataChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }
    handleDataChange(event) {
        this.setState({ [event.target.name]: event.target.value });
    }
    handleSubmit(event) {
        event.preventDefault();

        const newData = {
            id: this.state.id,
            name: this.state.name,
            author: this.state.author,
            description: this.state.description,
            total_pages: this.state.total_pages
        };
        this.state.id ? this.props.updateBookDetail(newData) : this.props.addBook(newData);
        this.props.history.push('/');
    }
    render() {
        return (
            <div className="editBookForm">
                <h1 className="formHeader">{this.state.id ? "Edit Book Form" : "Add Book Form"}</h1>
                <form onSubmit={this.handleSubmit}>
                    <div className="addFormInput">
                        <label htmlFor="name">Book Name:</label>
                        <input className="inputSize" type="text" name="name" value={this.state.name} onChange={this.handleDataChange} required />
                    </div>
                    <div className="addFormInput">
                        <label htmlFor="author">Author:</label>
                        <input className="inputSize" type="text" name="author" value={this.state.author} onChange={this.handleDataChange} required />
                    </div>
                    <div className="addFormInput">
                        <label htmlFor="description">Description:</label>
                        <textarea name="description" rows="4" cols="50" value={this.state.description} onChange={this.handleDataChange} required />
                    </div>
                    <div className="addFormInput">
                        <label htmlFor="total_pages">Total Pages:</label>
                        <input
                            type="number"
                            name="total_pages"
                            placeholder="Enter no. of pages"
                            value={this.state.total_pages}
                            onChange={this.handleDataChange}
                        />
                    </div>
                    <input type="submit" value={this.state.id ? "UPDATE BOOK" : "ADD BOOK"}/>
                </form>

            </div>
        );
    }
}

export default connect(null, { updateBookDetail, addBook })(AddBookForm);

