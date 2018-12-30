import React from 'react';
import ReactDOM from 'react-dom';
import Evergreen from 'evergreen-ui';
import Styled from 'styled-components';
import Header from './heder';
import Side from './side';
import BookCard from './book_card';
import List from './book_list'

// let Main = Styled.div
//     `
//     min-height: 300px;
//     background-color: rgba(245, 246, 250, 0.8);
//     position: absolute;
// `

let Sideboutton = Styled.div
    `
    padding: 10px;
    z-index: 1;
    position: sticky;
    top: 10px;
`
let Listtitle = Styled.h3
    `
padding: 5px;
`


class App extends React.Component {
    render() {
        return (
            <div>
                <Header />
                    <Sideboutton>
                        <Side />
                    </Sideboutton>
                    <Listtitle>Popular</Listtitle>
                    <List />
                    <Listtitle>Top Rated</Listtitle>
                    <List />
                    <Listtitle>Resntlty add</Listtitle>
                    <List />
            </div>
        )
    }
}

ReactDOM.render(<App />, document.getElementById('root'));


























{/* <Popover
  content={({ close }) => (
    <Pane
      width={320}
      height={320}
      paddingX={40}
      display="flex"
      alignItems="center"
      justifyContent="center"
      flexDirection="column"
    >
      <Button onClick={close}>Close</Button>
    </Pane>
  )}
>
  <Button>Trigger Popover</Button>
</Popover>  */}