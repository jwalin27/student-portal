import React, { Component } from 'react'
import { Header, Container } from 'semantic-ui-react'


export default class HomeView extends Component {
    constructor(props) {
        super(props);
        this.state = {
          date: new Date().toLocaleString()
        };
      }
      

    render() {
        return (
            <div>
                <Container textAlign='center'>
                <Header as='h2' color='black' >Welcome to student portal</Header>
                
                </Container>
                <div style={{marginTop: '4em'}}>
                    <Container textAlign='center'>
                    <Header as='h3'>Select your Path</Header>
            

                    </Container>
                    
                </div>
                
            </div>
        )
    }
}