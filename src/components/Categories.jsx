import React,{useEffect, useState}from 'react'
import parser from 'html-react-parser'
import Card from 'react-bootstrap/Card'
import Form from 'react-bootstrap/Form'
import Button from 'react-bootstrap/Button'
import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'

export default function Categories() {
  
  const [categories,setCategories]=useState([])
  const [postsByCategory,setPostsByCategory]=useState([])
  const [category,setCategory]=useState('')

  const getCategories=async()=>{
    const response=await fetch(`${process.env.REACT_APP_API_URL}/wp-json/wp/v2/categories`)
    const data=await response.json()
    console.log(data)
    setCategories(data)
  }
  const fetchPostsByCategory=async(category)=>{
    const response=await fetch(`${process.env.REACT_APP_API_URL}/wp-json/wp/v2/posts?categories=${category.id}`)
    const data=await response.json()

    setPostsByCategory(data)
    console.log(postsByCategory)
  }
  function addCategory(e) {
    e.preventDefault();
    console.log('form submitted');
    const url=`${process.env.REACT_APP_API_URL}/wp-json/wp/v2/categories`;
    const token=localStorage.getItem('wordpress-examination')
    const categoryPayload={name:category}

    fetch(url, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'Authorization':`Bearer ${token}`
      },
      body: JSON.stringify(categoryPayload),
    })
    .then((res) => res.json())
    .then(data=>getCategories())
    
  }
 
 useEffect(()=>{
   getCategories()
 },[])
  return (
    <Container>
      <Row>
        <Col md={6}>
          <Form onSubmit={addCategory}>
            <Form.Group>
              <Form.Label>Category</Form.Label>
              <Form.Control type='text' name={category}
              onChange={e=>setCategory(e.target.value)}></Form.Control>
              <Button type='submit' variant='primary' >add category</Button>
            </Form.Group>
          </Form>
        </Col>
        <Col md={6}>
            <h2>Categories</h2>
            {categories&&categories.map(category=>{
              
              return ( 
              
                  <Button className="btn btn-sm"variant="dark" key={category.id} onClick={()=>fetchPostsByCategory(category)}>
                    {parser(category.name)}
                  </Button>
                )  
            })}
        </Col>
      </Row>
     
     
      <Row>
        <Col>
        {postsByCategory&& postsByCategory.map(post=>{
          return (
                       <Card className="text-center" key={post.id}>
                       <Card.Header>Post</Card.Header>
                       <Card.Body>
                         <Card.Title>{parser(post.title.rendered)}</Card.Title>
                         <Card.Text>
                         {parser(post.content.rendered)}
                         </Card.Text>
                       </Card.Body>
                       <Card.Footer className="text-muted">2 days ago</Card.Footer>
                     </Card>
          )
        })}
        </Col>
      </Row>
       
    </Container>
  )
}
