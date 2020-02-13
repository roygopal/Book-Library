import React from 'react';
import { connect } from 'react-redux';
import { getBooks } from '../actions/BookAction';
import './BookList.css'
import BookTile from './BookTile';
import {Link} from "react-router-dom";


class BookList extends React.PureComponent {
    constructor(props) {
        super(props);
        this.state = {
            searchInput: ''
        };
        this.handleSearchInput = this.handleSearchInput.bind(this);
    }
    componentDidMount() {
        this.props.getBooks();
    };
    handleSearchInput(event) {
        this.setState({searchInput: event.target.value});
    };

    render() {
        let { books } = this.props.bookList;
        books = books.filter(item => item.name.toLowerCase().includes(this.state.searchInput));
        return (
            <div className="bookListContainer">
                <div className="searchContainer">
                    <input className="searchInput"
                           placeholder="Search for books ..."
                           value={this.state.searchInput}
                           onChange={this.handleSearchInput} />
                    <p><Link to="/add">ADD BOOK</Link></p>
                </div>
                <div className="booksCount"><strong>Book Count:</strong> {books.length}</div>
                <div className="booksContainer">
                    {books.map(({ _id, id, name, author, description, total_pages}) => (
                            <BookTile _id={_id}
                              id={id}
                              key={id}
                              name={name}
                              author={author}
                              description={description}
                              total_pages={total_pages}
                            />
                        )
                    )}
                </div>
            </div>
        );
    }
}

const mapStateToProps = (state) => ({
    bookList: state.books,
    search: state.filter
});

export default connect(mapStateToProps, {
    getBooks
})(BookList);
