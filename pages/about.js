import Head from "next/head";
import React, { useState } from "react";
import { serverSideTranslations } from "next-i18next/serverSideTranslations";

import { Container, Row, Col, Image, Button } from "react-bootstrap";

const data = {
  2016: {
    image: "/image/home_left.jpg",
    p: "We provide the best Beard oil all over the world. We are the worldd best store for Beard Oil. You can buy our product without any hegitation because we always consus about our product quality and always maintain it properly so your can trust and this is our main goal we belive that... Some of our customer say’s that they trust us and buy our product without any hagitation because they belive us and always happy",
  },
  2017: {
    image: "/image/home_right.jpg",
    p: "We eard oil all over the world. We are the worldd best store for Beard Oil. You can buy our product without any hegitation because we always consus about our product quality and always maintain it properly so your can trust and this is our main goal we belive that... Some of our customer say’s that they trust us and buy our product without any hagitation because they belive us and always happy",
  },
  2018: {
    image: "/image/leftTop.png",
    p: "We provide the best Beare the worldd best store for Beard Oil. You can buy our product without any hegitation because we always consus about our product quality and always maintain it properly so your can trust and this is our main goal we belive that... Some of our customer say’s that they trust us and buy our product without any hagitation because they belive us and always happy",
  },
  2019: {
    image: "/image/rightDown.png",
    p: "We provide the best Beard oil all over the world. We are the worldd best store for Beard Oil. You can buy our product without any hegitation because we always consus about our product quality and always maintain it properly so your can trust and this is our main goal we belive that... Some of our customer say’s that they trust us and buy our product without any hagitation because they belive us and always happy",
  },
  2020: {
    image: "/image/home_right.jpg",
    p: "We provide the best Beard oil all over the world. We are the worldd best store for Beard Oil. You can buy our product without any hegitation because we always consus about our product quality and always maintain it properly so your can trust and this is our main goal we belive that... Some of our customer say’s that they trust us and buy our product without any hagitation because they belive us and always happy",
  },
};

export default function About() {
  console.log(Object.keys(data));
  const [year, setYear] = useState(Object.keys(data)[0]);
  return (
    <div>
      <Head>
        <title>Create Next App</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <div style={{ backgroundColor: "#ECBD99" }}>
        <Container>
          <Row>
            <Col
              style={{
                display: "flex",
                flexDirection: "column",
                justifyContent: "center",
              }}
            >
              <h1 style={{ color: "#fff" }}>About Us</h1>
              {/* {"Home > About Us"} */}
              <div>
                <a href="/">Home</a>
                {">"} About Us
              </div>
            </Col>
            <Col
              style={{
                display: "flex",
                justifyContent: "center",
              }}
            >
              <Image
                src="/image/cbd_oil.png"
                width={600}
                height={353}
                layout="responsive"
              />
            </Col>
          </Row>
        </Container>
      </div>
      <Container style={{ marginTop: 40 }}>
        <Row>
          <Col style={{ padding: 20 }}>
            <h3>Provide the best</h3>
            <h1>Beard Oil For You</h1>
            <p>
              We provide the best Beard oil all over the world. We are the
              worldd best store for Beard Oil. You can buy our product without
              any hegitation because we always consus about our product quality
              and always maintain it properly so your can trust and this is our
              main goal we belive that...
            </p>
            <p>
              Some of our customer say’s that they trust us and buy our product
              without any hagitation because they belive us and always happy
            </p>
            <Button>View More</Button>
          </Col>
          <Col>
            <Image
              src="/image/leftTop.png"
              width={600}
              height={353}
              layout="responsive"
            />
          </Col>
        </Row>
      </Container>

      <Container style={{ margin: "50px auto" }}>
        <iframe
          width="100%"
          height="700"
          src="https://www.youtube.com/embed/qu5PxhEUMfU"
          title="YouTube video player"
          frameBorder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          allowFullScreen
        ></iframe>
      </Container>

      <div style={{ background: "#ddd" }}>
        <Container style={{ padding: 50 }}>
          <Row>
            <Col xs={4}>
              <div
                style={{
                  display: "flex",
                  flexDirection: "column",
                  justifyContent: "center",
                  alignContent: "center",
                }}
              >
                <h3>{year}</h3>
                <p>{data[year].p}</p>
              </div>
            </Col>
            <Col xs={6} style={{ display: "flex", flex: 1 }}>
              <img src={data[year].image} style={{ width: 380, height: 346 }} />
            </Col>

            <Col xs={2}>
              <ul style={{ listStyleType: "none" }}>
                {Object.keys(data).map((y, i) => {
                  console.log("y:", y);
                  return (
                    <li
                      key={i}
                      style={{
                        color: year === y ? "#09c" : "#000",
                        fontWeight: "bold",
                        paddingTop: 10,
                        paddingBottom: 10,
                        fontSize: 20,
                      }}
                      onClick={() => setYear(y)}
                    >
                      - {y}
                    </li>
                  );
                })}
              </ul>
            </Col>
          </Row>
        </Container>
      </div>

      <Row style={{ padding: 100, maxWidth: "100%" }}>
        <Col style={{ display: "flex", justifyContent: "center" }}>
          <Image
            src="image/logo1.png"
            layout="responsive"
            width={100}
            height={100}
          />
        </Col>
        <Col style={{ display: "flex", justifyContent: "center" }}>
          <Image
            src="image/logo2.png"
            layout="responsive"
            width={100}
            height={100}
          />
        </Col>
        <Col style={{ display: "flex", justifyContent: "center" }}>
          <Image
            src="image/logo3.png"
            layout="responsive"
            width={100}
            height={100}
          />
        </Col>
        <Col style={{ display: "flex", justifyContent: "center" }}>
          <Image
            src="image/logo4.png"
            layout="responsive"
            width={100}
            height={100}
          />
        </Col>
        <Col style={{ display: "flex", justifyContent: "center" }}>
          <Image
            src="image/logo5.png"
            layout="responsive"
            width={100}
            height={100}
          />
        </Col>
      </Row>
      <Container style={{ marginTop: -50, marginBottom: 50 }}>
        <div style={{ boxShadow: "0px 10px 20px #0007" }}>
          <Row>
            <Col>
              <div style={{ display: "flex", flexDirection: "row" }}>
                <div style={{ margin: "auto 10px", background: "#09c8" }}>
                  Icon
                </div>
                <div className="home_feature">
                  <h4>Order Online</h4>
                  <p>Free Shipping on Order Over $100</p>
                </div>
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
            <Col>
              <div className="home_feature">
                <h4>Payment System</h4>
                <p>Secure Payment System</p>
              </div>
            </Col>
            <Col>
              <div className="home_feature">
                <h4>Payment System</h4>
                <p>Secure Payment System</p>
              </div>
            </Col>
          </Row>
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
