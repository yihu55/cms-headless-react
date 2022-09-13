import React, { useState, useEffect } from 'react';
import AddPost from '../components/AddPost';
import Postlist from '../components/Postlist';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

export default function Home() {
  const [posts, setPosts] = useState([]);
  const [categories, setCategories] = useState([]);

  useEffect(() => {
    getPosts();
    getCategories();
  }, []);
  const getPosts = () => {
    const url = `${process.env.REACT_APP_API_URL}/wp-json/wp/v2/posts`;
    console.log(url);
    fetch(url)
      .then((res) => res.json())
      .then((data) => setPosts(data));
  };
  const getCategories = async () => {
    const response = await fetch(
      `${process.env.REACT_APP_API_URL}/wp-json/wp/v2/categories`
    );
    const data = await response.json();
    setCategories(data);
  };

  return (
    <>
      <Container>
        <Row>
          <Col md={8}>
            <Postlist
              posts={posts}
              categories={categories}
              getCategories={getCategories}
            />
          </Col>
          <Col md={4}>
            <AddPost getPosts={getPosts} />
          </Col>
        </Row>
      </Container>
    </>
  );
}
