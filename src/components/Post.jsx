import React from 'react'
import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button'
import parse from 'html-react-parser';
import { Link } from 'react-router-dom';


export default function Post({post}) {
 
  return (
        
              <Card className="text-center" key={post.id}>
                <Card.Header>single Post</Card.Header>
                <Card.Body>
                  <Card.Title>{parse(post.title.rendered)}</Card.Title>
                  <Card.Text dangerouslySetInnerHTML={{__html:post.excerpt.rendered}}/>
                  <Link to={`/${post.id}`}><Button variant="primary">discover details</Button></Link>
                </Card.Body>
                <Card.Footer className="text-muted">{post.date}</Card.Footer>
             
              </Card>
          );
  }
