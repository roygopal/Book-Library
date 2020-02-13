import React, { Component } from 'react';
import {Link} from "react-router-dom";
import PropTypes from 'prop-types';
import './BookTile.css';



class BookTile extends Component {
    static propTypes = {
        id: PropTypes.string,
        name: PropTypes.string.isRequired,
        author: PropTypes.string.isRequired,
        description: PropTypes.string.isRequired,
        total_pages: PropTypes.number.isRequired,
    };
    render() {
        const {_id, id, name, author, description, total_pages} = this.props;
        const stateObj = {
            _id,
            id,
            name,
            author,
            description,
            total_pages
        };
        return (
            <div className="bookTile">
                <div className="tileContent">
                    <div className="bookDetails">
                        <h3 className="bookName addEllipsis">{name}</h3>
                        <p className="authorName addEllipsis">By: {author}</p><br/>
                        <p className="addEllipsis"><i>Desc: {description}</i></p>
                        <p>Total Pages: {total_pages}</p>
                    </div>
                    <div className="editBook">
                        <Link to={{
                            pathname: "/edit",
                            state: stateObj
                        }}>EDIT BOOK</Link>
                    </div>
                </div>
            </div>
        )
    }
}


export default BookTile;
