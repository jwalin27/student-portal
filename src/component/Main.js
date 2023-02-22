import React from 'react'
import { Menu, Segment } from 'semantic-ui-react'
import { Switch , Route, NavLink } from 'react-router-dom'

import HomeView from './HomeView'


const Main = () => (
    <div>
        <Menu pointing secondary stackable color='orange' size='small'>
            <Menu.Menu position='right'>
                <Menu.Item  as={NavLink} exact to='/' name='Welcome' /> 
                
            </Menu.Menu>
        </Menu>

        <Segment raised style={{marginTop: '2em'}} className='magentaSegment'>
            <Switch>
                <Route exact path='/' component={HomeView} />
                
                {/* <Route path='*' component={NotFound} /> */}
            </Switch>
        </Segment>
    </div>
)

export default Main