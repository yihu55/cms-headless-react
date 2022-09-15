import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import Button from 'react-bootstrap/Button'
import { useNavigate } from 'react-router-dom';
function NavbarComponent() {
    const navigate=useNavigate()
    const token=localStorage.getItem('wordpress-examination')
    const logout=()=>{
      localStorage.removeItem('wordpress-examination')
      navigate('/login')
    }
  return (
    <>   <Navbar bg="dark" variant="dark">
    <Container>
      <Navbar.Brand href="/">My posts</Navbar.Brand>
      <Nav className="me-auto">
        <Nav.Link href="/">Home</Nav.Link>
        <Nav.Link href="/categories">Categories</Nav.Link>
        {token===undefined || !token ? <Nav.Link href="/login">Log in</Nav.Link> : <Button onClick={logout}>log out</Button>}
      </Nav>
    </Container>
  </Navbar></>
  )
}

export default NavbarComponent