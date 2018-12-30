import React from 'react';
import ReactDOM from 'react-dom';
import { SideSheet, Button, Paragraph, Pane, Heading, Tablist, Tab, Card, Position } from 'evergreen-ui';
import Styled from 'styled-components';


class Side extends React.Component {
    constructor() {
        super();
        this.state = {
            isShown: false
        }
    }
    render() {
        return (
            <React.Fragment>
                <SideSheet
                    isShown={this.state.isShown}
                    position={Position.LEFT}
                    onCloseComplete={() => this.setState({ isShown: false })}
                    containerProps={{
                        display: 'flex',
                        flex: '1',
                        flexDirection: 'column',
                    }}
                >
                    <Pane zIndex={1} flexShrink={0} elevation={0} backgroundColor="white">
                        <Pane padding={16} borderBottom="muted">
                            <Heading size={600}>User Name</Heading>
                            <Paragraph size={400} color="muted">
                                E-mail
                  </Paragraph>
                        </Pane>
                        <Pane display="flex" padding={8}>
                            <Tablist>
                                {['Books', 'Event History'].map(
                                    (tab, index) => (
                                        <Tab
                                            key={tab}
                                            isSelected={this.state.selectedIndex === index}
                                            onSelect={() => this.setState({ selectedIndex: index })}
                                        >
                                            {tab}
                                        </Tab>
                                    )
                                )}

                            </Tablist>
                        </Pane>
                    </Pane>
                    <Pane flex="1" overflowY="scroll" background="tint1" padding={16}>
                        <Card
                            backgroundColor="white"
                            elevation={0}
                            height={240}
                            display="flex"
                            alignItems="center"
                            justifyContent="center"
                        >
                            <Heading>Some content</Heading>
                        </Card>
                    </Pane>
                </SideSheet>
                <Button appearance="primary" onClick={() => this.setState({ isShown: true })}>
                    Show Basic Side Sheet
            </Button>
            </React.Fragment>
        )
    }
}


export default Side;