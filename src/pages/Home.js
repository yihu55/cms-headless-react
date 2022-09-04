import React, { useState, useEffect } from 'react';
import AddPost from '../components/AddPost';
import Categories from '../components/Categories';
import Postlist from '../components/Postlist';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

export default function Home() {
  console.log('hejhej');
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    getPosts();
  }, []);
  const getPosts = () => {
    const url = 'http://localhost/headless-cms/wp-json/wp/v2/posts';
    fetch(url)
      .then((res) => res.json())
      .then((data) => setPosts(data));
  };
  return (
    <Container>
      <Row>
        <Col md={8}>
          <Postlist posts={posts} />
        </Col>
        <Col md={4}>
          <AddPost getPosts={getPosts} />
          <Categories />
        </Col>
      </Row>
    </Container>
  );
}
