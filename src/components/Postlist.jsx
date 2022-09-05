import React from 'react';
import parse from 'html-react-parser';
import { Link } from 'react-router-dom';
import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button'
export default function Postlist({posts}) {

  return (<>
   {posts&&
        posts.map((post) => {
          return (
        
              <Card className="text-center" key={post.id}>
                <Card.Header>Post</Card.Header>
                <Card.Body>
                  <Card.Title>{parse(post.title.rendered)}</Card.Title>
                  <Card.Text>
                  {parse(post.content.rendered)}
                  </Card.Text>
                  <Link to={`/${post.id}`}><Button Button variant="primary">discover details</Button></Link>
                </Card.Body>
                <Card.Footer className="text-muted">2 days ago</Card.Footer>
              </Card>
          );
        })}
  </>
   
  )
}
