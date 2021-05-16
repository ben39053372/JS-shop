import '../styles/globals.css'
import "bootstrap/dist/css/bootstrap.min.css";

import { Navbar, Container, Nav } from 'react-bootstrap'
import { BsSearch, BsFillPersonFill, BsBagFill } from 'react-icons/bs'

import { appWithTranslation, useTranslation } from 'next-i18next'
import { serverSideTranslations } from 'next-i18next/serverSideTranslations'

function MyApp({ Component, pageProps }) {
  const { t } = useTranslation("common")
  return (
    <>
      <Navbar expand="lg" variant="light" bg="light">
        <Container>
          <Navbar.Brand href="#">Shop</Navbar.Brand>
          <Navbar.Toggle aria-controls="responsive-navbar-nav"></Navbar.Toggle>
          <Navbar.Collapse id="responsive-navbar-nav">
            <Nav className="mr-auto">
              <Nav.Link href="/">{t('home')}</Nav.Link>
              <Nav.Link href="/about">{t('about')}</Nav.Link>
              <Nav.Link href="/products">Products</Nav.Link>
              <Nav.Link href="/kits">Kits</Nav.Link>
              <Nav.Link href="/news">News</Nav.Link>
              <Nav.Link href="/contact">Contact</Nav.Link>
            </Nav>
          </Navbar.Collapse>

          <div className="mx-2">
            USD
          </div>
          <div className="mx-2">
            <BsSearch />
          </div>
          <div className="mx-2">
            <BsFillPersonFill />
          </div>
          <div className="mx-2">
            <BsBagFill />
          </div>
        </Container>
      </Navbar>
      <Component {...pageProps} />
    </>
  )
}

export const getStaticProps = async ({ locale }) => ({
  props: {
    ...await serverSideTranslations(locale, ['common']),
  }
})

export default appWithTranslation(MyApp)
