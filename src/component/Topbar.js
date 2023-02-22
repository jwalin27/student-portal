import React, { Component } from 'react'
import { Menu, Header} from 'semantic-ui-react'

export default class Topbar extends Component {
    render() {
        return (
            <div>
            <Menu borderless fixed='top' size='large'>
                <Menu.Item>
                    <Header textAlign='center' as='h2' style={header}>Student Portal</Header>
                </Menu.Item>
            </Menu>
            </div>
        )
    }
}

const header = {
    color: '#6A6A6A',
    fontFamily: 'Play, sans-serif'
}