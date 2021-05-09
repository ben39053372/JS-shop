import '../styles/globals.css'
import "bootstrap/dist/css/bootstrap.min.css";

import { Navbar, Container, Nav } from 'react-bootstrap'

function MyApp({ Component, pageProps }) {
  return (
    <>
      <Navbar expand="lg" variant="light" bg="light">
        <Container>
          <Navbar.Brand href="#">Shop</Navbar.Brand>
          <Navbar.Toggle aria-controls="responsive-navbar-nav"></Navbar.Toggle>
          <Navbar.Collapse id="responsive-navbar-nav">
            <Nav className="mr-auto">
              <Nav.Link href="/">Home</Nav.Link>
              <Nav.Link href="/about">Abouts</Nav.Link>
              <Nav.Link href="/products">Products</Nav.Link>
              <Nav.Link href="/kits">Kits</Nav.Link>
              <Nav.Link href="/news">News</Nav.Link>
              <Nav.Link href="/contact">Contact</Nav.Link>
            </Nav>
            <Nav>
              <Navbar.Text>
                usd
              </Navbar.Text>
              <Navbar.Text>
                icon 1
              </Navbar.Text>
              <Navbar.Text>
                icon 2
              </Navbar.Text>
              <Navbar.Text>
                icon 3
              </Navbar.Text>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
      <Component {...pageProps} />
    </>
  )
}

export default MyApp
