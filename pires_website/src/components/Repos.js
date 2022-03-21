import React, { useState, useEffect } from 'react'
import InputGroup from "react-bootstrap/InputGroup";
import FormControl from "react-bootstrap/FormControl";
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';
import Card from 'react-bootstrap/Card';
import "./css/repo.css";


//Component that displays and filters the repositories
export default function Repos (props) {
  
  const [q, setQ] = useState("");

  const results=props.repos.filter(
    item=>{
      return (item.name.toString().toLowerCase().includes(q.toLowerCase()))
  })

  useEffect(() => {
   console.log(results)
  }, )



  return (
    <>
      <Row>
        <Col>
            <InputGroup className="col-6 input-bar">
              <FormControl
                  placeholder="Search"
                  aria-label="Search"
                  aria-describedby="basic-addon2"
                  value={q}
                  onChange={(e) => setQ(e.target.value)}
              />
              </InputGroup>
          </Col>
        </Row>
        <Row>
            <div>{results.map((item) => {
            return(
              <Card className="repo-card"> 
                <Card.Link className="repo-name" href={item.html_url} target="_blank"><Card.Title>{item.name}</Card.Title></Card.Link>
                <Card.Body>{item.description}</Card.Body>
              </Card>
            )})}
          </div> 
        </Row>

  </>

  )
}