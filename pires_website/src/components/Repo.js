import React, { useState, useEffect } from 'react'


export default function Posts() {
  const [post, getPost] = useState([])
  const API = process.env.REACT_APP_API_URL
  const fetchPost = () => {
    fetch(API)
      .then((res) => res.json())
      .then((res) => {
        console.log(res)
        getPost(res)
      })
  }
  
  useEffect(() => {
    fetchPost()
  }, [])

  return (
    <>
      <ul>
        {post.map((item, i) => {
          return <li key={i}>{item.name}</li>
        })}
      </ul>
    </>
  )
}