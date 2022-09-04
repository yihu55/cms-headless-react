import React,{useState,useEffect} from 'react';
import parse from 'html-react-parser';
import { Link } from 'react-router-dom';
import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button'
export default function Postlist({posts}) {
  console.log(posts)
    // const [posts, setPosts] = useState([]);

    // useEffect(() => {
    //   const url = 'http://localhost/headless-cms/wp-json/wp/v2/posts';
    //   fetch(url)
    //     .then((res) => res.json())
    //     .then((data) => setPosts(data));
    // }, []);
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
