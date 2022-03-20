import React, { PureComponent } from 'react';
import {Navbar,Container,Nav} from 'react-bootstrap';

class Navbar2 extends PureComponent {
    

    render() {
        return (
            <Navbar  bg="dark" variant="dark">
                <Container>
                    <Navbar.Brand href="#home">Repo Search</Navbar.Brand>
                    {/* <Nav className="me-auto">
                        <Nav.Link href="#home">Your Github</Nav.Link>
                    </Nav> */}
                </Container>
            </Navbar>
        )
        }
}

export default Navbar2