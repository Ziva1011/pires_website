import React, {useState, useEffect} from 'react'
import "./css/home.css";
import 'bootstrap/dist/css/bootstrap.css';
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';
import Card from 'react-bootstrap/Card';
import Repos from './Repos';

export interface IUser{
    name: string;
    bio: string;
    url: string;
    avatar_url: string;
}

const Home = () => {
        const [user, getUser] = useState<IUser>({name:"",bio:"",url:"",avatar_url:""})
        const [repos, getRepos] = useState([])
        const API = process.env.REACT_APP_API_URL ?? ''
       
        const fetchUser = () => {
            fetch(API)
              .then((res) => res.json())
              .then((res) => {
                getUser({
                    name:res["name"],
                    bio:res["bio"],
                    url:res["html_url"],
                    avatar_url: res["avatar_url"]
                })
              })
              
          }
        const fetchRepos = () => {
          fetch(API+ "/repos")
            .then((res) => res.json())
            .then((res) => {
              getRepos(res)
            })
        }
        useEffect(() => {
            fetchRepos();
            fetchUser();
            console.log(user);
           
          }, [])
        return (
            <>
               <div className="App">
                    <div className="container profile-content">
                        <Row>
                            <Col md={3} className="side-bar">
                            <Card className="card-content border-0">
                                <Card.Img className="user-img" variant="top" src={user.avatar_url} />
                                <Card.Link className="user-name" href={user.url} target="_blank"><Card.Title className="text-title">
                                    {user.name}
                                </Card.Title></Card.Link>
                                <Card.Body className="text-body">
                                        "{user.bio}"
                                </Card.Body>
                            </Card>  
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