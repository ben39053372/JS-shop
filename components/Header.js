import React from 'react'
import { Navbar, Container, Nav } from "react-bootstrap";
import { BsSearch, BsFillPersonFill, BsBagFill } from "react-icons/bs";
import { appWithTranslation, useTranslation } from "next-i18next";

export const Header = () => {
  const { t } = useTranslation("common");

  return (
    <Navbar expand="lg" variant="light" bg="light">
      <Container>
        <Navbar.Brand href="#">{t("shop_name")}</Navbar.Brand>
        <Navbar.Toggle aria-controls="responsive-navbar-nav"></Navbar.Toggle>
        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav className="mr-auto">
            <Nav.Link href="/">{t("home")}</Nav.Link>
            <Nav.Link href="/about">{t("about")}</Nav.Link>
            <Nav.Link href="/products">{t("products")}</Nav.Link>
            <Nav.Link href="/kits">{t("kits")}</Nav.Link>
            <Nav.Link href="/news">{t("news")}</Nav.Link>
            <Nav.Link href="/contact">{t("contact")}</Nav.Link>
          </Nav>
        </Navbar.Collapse>

        <div className="mx-2">USD</div>
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
  )
}