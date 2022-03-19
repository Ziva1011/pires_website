import React, { PureComponent } from 'react'
//import Navbar from 'Navbar';
import "./css/home.css";
import 'bootstrap/dist/css/bootstrap.css';
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';
import InputGroup from "react-bootstrap/InputGroup";
import FormControl from "react-bootstrap/FormControl";
import Button from "react-bootstrap/Button";


const Home = () => {
 /*    constructor(props) {
        super(props)

        this.state = {
            
        }
    }
 */
        return (
            <>
               <div className="App">
                    <div className="container profile-content">
                        <Row>
                            <Col md={3} className="side-bar">
                                Sample Second Col
                                
                            </Col>
                            <Col>
                                <div className="container">
                                    <div className="row h-100 search-bar"></div>
                                    <InputGroup className="col-6">
                                    <FormControl
                                        placeholder="Search"
                                        aria-label="Search"
                                        aria-describedby="basic-addon2"
                                    />
                                    <Button variant="outline-secondary" id="button-addon2">
                                        Search
                                    </Button>
                                    </InputGroup>
                                </div>
                            </Col>
                        </Row>
                    </div>
                </div>
            </>
        )
}

export default Home