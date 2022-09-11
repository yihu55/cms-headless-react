import React, { useState } from 'react';
import Form from 'react-bootstrap/Form';
import {Button} from 'react-bootstrap'

export default function AddPost({getPosts}) {
  const [content, setContent] = useState('');
  const [title, setTitle] = useState('');
  

  function submitPost(e) {
    e.preventDefault();
    console.log('form submitted');
    const url = '/wp-json/wp/v2/posts';
    const token=localStorage.getItem('wordpress-examination')
    const payload = { title, content,status:'publish'};
  
    fetch(url, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'Authorization':`Bearer ${token}`
      },
      body: JSON.stringify(payload),
    })
    .then((res) => res.json())
    .then(data=>getPosts())
    
  }

  return (
    <>
      <Form onSubmit={submitPost}>
      <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
        <Form.Label>Title</Form.Label>
        <Form.Control type="text"  name={title}
        onChange={(e) => setTitle(e.target.value)} />
      </Form.Group>
      <Form.Group className="mb-3" controlId="exampleForm.ControlTextarea1">
        <Form.Label>Example textarea</Form.Label>
        <Form.Control as="textarea" rows={3}  type='text'
        name={content}
        onChange={(e) => setContent(e.target.value)}/>
         <Button type='submit' variant='primary' >add post</Button>   
      </Form.Group>
    
    </Form>
 
    </>
  )
}