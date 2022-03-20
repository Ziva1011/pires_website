import React, { useState, useEffect } from 'react'
import InputGroup from "react-bootstrap/InputGroup";
import FormControl from "react-bootstrap/FormControl";
import Button from "react-bootstrap/Button";
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';
import Card from 'react-bootstrap/Card';
import "./css/repo.css";

export default function Repos (props) {
  
  const [filterRepo, getFilterRepo] = useState([])
  const [q, setQ] = useState("");

  //var filterRepo = []
  const results=props.repos.filter(
    item=>{
      return (item.name.toString().toLowerCase().includes(q.toLowerCase()))
  })

  function showResults (){
    results.map((item) => {
      return <Card.Body>{item.name}</Card.Body>
      })
  }

  useEffect(() => {
   console.log(results)
    /* const results=post.filter(
      item=>{
        return item.name.toString().toLowerCase().includes(props.query.toLowerCase())
      })
    getFilterRepo(results) */
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
                <Card.Link href={item.html_url} target="_blank"><Card.Title>{item.name}</Card.Title></Card.Link>
                <Card.Body>{item.description}</Card.Body>
              </Card>
            )})}
          </div> 
         {/*  <Card>
            <div>{results.map((item) => {
            return <p>{item.name}</p>
            })}
          </div> 
          </Card> */}
        </Row>

  </>

  )
}