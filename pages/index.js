import Head from "next/head";
import React, { useState } from "react";

import { Carousel, Container, Row, Col } from "react-bootstrap";
import Image from "next/image";

import { serverSideTranslations } from "next-i18next/serverSideTranslations";

import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';

export default function Home() {
  const [index, setIndex] = useState(0);

  const handleSelect = (selectedIndex, e) => {
    setIndex(selectedIndex);
  };

  const items = [
    {
      image: "http://nailnail.shop/img/banner/6.png",
      caption1: "First slide label",
      caption2: "Nulla vitae elit libero, a pharetra augue mollis interdum.",
    },
    {
      image: "http://nailnail.shop/img/banner/6.png",
      caption1: "2 slide label",
      caption2: "Nulla vitae elit libero, a pharetra augue mollis interdum.",
    },
    {
      image: "http://nailnail.shop/img/banner/6.png",
      caption1: "3 slide label",
      caption2: "Nulla vitae elit libero, a pharetra augue mollis interdum.",
    },
    {
      image: "http://nailnail.shop/img/banner/6.png",
      caption1: "4 slide label",
      caption2: "Nulla vitae elit libero, a pharetra augue mollis interdum.",
    },
  ];

  return (
    <div>
      <Head>
        <title>Create Next App</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <Carousel activeIndex={index} onSelect={handleSelect} interval={6000}>
        {items.map((item, index) => {
          return (
            <Carousel.Item key={index}>
              <div className="w-100" style={{ height: 500 }}>
                <Image
                  src={item.image}
                  alt={item.caption1}
                  layout="fill"
                  quality={50}
                />
              </div>
              <Carousel.Caption>
                <h3>{item.caption1}</h3>
                <p>{item.caption2}</p>
              </Carousel.Caption>
            </Carousel.Item>
          );
        })}
      </Carousel>

      <Container style={{ position: "relative", top: -30, zIndex: 10, background: "#fff", boxShadow: "0px 10px 20px rgba(0,0,0,0.3)" }} >
        <Row>
          <Col>
            <div className="home_feature">
              <h4>Order Online</h4>
              <p>Free Shipping on Order Over $100</p>
            </div>
          </Col>

          <Col>
            <div className="home_feature">
              <h4>Worldwide Shipping</h4>
              <p>24/7 h Customer Support</p>
            </div>
          </Col>

          <Col>
            <div className="home_feature">
              <h4>Payment System</h4>
              <p>Secure Payment System</p>
            </div>
          </Col>
        </Row>
      </Container>

      <Container className="pt-5">
        <Row>
          <Col>
            <Image src="/image/home_left.jpg" width={600} height={353} layout="responsive" />
          </Col>
          <Col>
            <Image src="/image/home_right.jpg" width={600} height={353} layout="responsive" />
          </Col>
        </Row>
      </Container>

      <Container className="pt-5">
        <div className="center">
          <h1>New Arrivals</h1>
          <p>There are many variations of Lorem Ipsum available</p>
        </div>
      </Container>

    </div>
  );
}

export const getStaticProps = async ({ locale }) => ({
  props: {
    ...(await serverSideTranslations(locale, ["common"])),
  },
});
