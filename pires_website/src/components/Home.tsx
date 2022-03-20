import React, { PureComponent, useState, useEffect} from 'react'
//import Navbar from 'Navbar';
import "./css/home.css";
import 'bootstrap/dist/css/bootstrap.css';
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';

import Repos from './Repos';

//inside your starter code, do this


const Home = () => {
        const [user, getUser] = useState([])
        const [repos, getRepos] = useState([])
        
        const API = process.env.REACT_APP_API_URL ?? ''
       
        const fetchUser = () => {
            fetch(API)
              .then((res) => res.json())
              .then((res) => {
                console.log(res)
                getUser(res)
              })
          }
        const fetchRepos = () => {
          fetch(API+ "/repos")
            .then((res) => res.json())
            .then((res) => {
              //console.log(res)
              getRepos(res)
            })
        }
        useEffect(() => {
            fetchRepos();
            fetchUser()
           
          }, [])
        return (
            <>
               <div className="App">
                    <div className="container profile-content">
                        <Row>
                            <Col md={3} className="side-bar">
                            </Col>
                            <Col>
                            
                                <Row>
                                    <Repos repos={repos}/>

                                </Row>
                                
                            </Col>
                        </Row>
                    </div>
                </div>
            </>
        )
}

export default Home