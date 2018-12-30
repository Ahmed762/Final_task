import React from 'react';
import ReactDOM from 'react-dom';
import { Autocomplete, TextInput } from 'evergreen-ui';
import Styled from 'styled-components';




let Head = Styled.header
    `
  background-color: #fff;
  height: 120px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 0px 5%;
  box-shadow: 0px 2px 25px rgba(0,0,0,0.16);
`

let Search = Styled.input
    `
  display: block;
  border: 2px solid #000;
  width: 200px;
  margin: 10px 0px;
  height: 30px;
  font-size: 1.4rem;
  border-radius: 10px;
  outline: 0;
`

class Header extends React.Component {
    render() {
        return (
            <Head>
                <img src="assets/logo.png" alt=""></img>
                <h1>Booky Store</h1>
                <Search placeholder="Search..."></Search>
            </Head>
        )
    }

}

export default Header;







{/* <Autocomplete
    title="Fruits"
    onChange={(changedItem) => console.log(changedItem)}
    items={['Apple', 'Apricot', 'Banana', 'Cherry', 'Cucumber']}
>
    {(props) => {
        const { getInputProps, getRef, inputValue } = props
        return (
            <TextInput
                placeholder="Book Search"
                value={inputValue} 
                innerRef={getRef}
                {...getInputProps()}
            />
        )
    }}
</Autocomplete> */}