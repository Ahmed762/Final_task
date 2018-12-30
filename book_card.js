import React from 'react';
import ReactDOM from 'react-dom';
import { } from 'evergreen-ui';
import Styled from 'styled-components';

let Card = Styled.div
    `
border: 2px solid gray;
min-height: 270px;
min-width: 250px;
margin: 5px 10px;
position: relative;
`
let Button = Styled.button
    `
position: absolute;
bottom: 10px;
right: 10px;
outline: 0;
background-color: #1070CA;
padding: 10px;
border-radius: 5px;
border: none;
color: white;
font-weight: bold;
min-width: 100px;
cursor: pointer;

`

let BookInfo = Styled.div
    `
position: absolute;
bottom: 50px;
left: 10px;
`

class BookCard extends React.Component {
    render() {
        return (
            <Card>
                <img></img>
                <BookInfo>
                    <h3>Book Name</h3>
                    <h4>Auther Name</h4>
                    <p>Discrption</p>
                </BookInfo>
                <Button className="anmation">Read Book</Button>
            </Card>
        )
    }
}


export default BookCard;

