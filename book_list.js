import React from 'react';
import ReactDOM from 'react-dom';
import { Button } from 'evergreen-ui';
import Styled from 'styled-components';
import BookCard from './book_card';

let BookList = Styled.div
    `
 overflow: auto;
 white-space: nowrap;  
 display: flex;
 margin: 15px 0;
`

class List extends React.Component {
    render() {
        return (
            <BookList>
                <BookCard />
                <BookCard />
                <BookCard />
                <BookCard />
                <BookCard />
                <BookCard />
                <BookCard />
                <BookCard />
                <BookCard />
                <BookCard />
            </BookList>
        )
    }
}

export default List;