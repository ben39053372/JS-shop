import React from "react";
import { Row, Col, Container, Button } from "react-bootstrap";
import Image from "next/image";
import { serverSideTranslations } from "next-i18next/serverSideTranslations";
import { ProductCategoriesCard } from "../components/ProductCategoriesCard";
import { SearchObjectsCard } from "../components/SearchObjectsCard";
import { FilterByPrice } from "../components/FilterByPriceCard";
import { TopRatedProductCard } from "../components/TopRatedProductCard";
import { PopularTagsCard } from "../components/PopularTagsCard";
import { ProductList } from "../components/ProductList";

export default function Products() {
  return (
    <div>
      <div style={{ backgroundColor: "#ECBD99", marginBottom: 120 }}>
        <Container>
          <Row>
            <Col
              style={{
                display: "flex",
                flex: 1,
                flexDirection: "column",
                justifyContent: "center",
                minHeight: 250,
              }}
            >
              <h1 style={{ color: "#fff" }}>Products</h1>
              {/* {"Home > About Us"} */}
              <div>
                <a href="/">Home</a>
                {">"} Products
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
      <Container>
        <Row>
          <Col xs={4}>
            <ProductCategoriesCard />
            <SearchObjectsCard />
            <FilterByPrice />
            <TopRatedProductCard />
            <PopularTagsCard />
          </Col>
          <Col xs={8}>
            <ProductList />
          </Col>
        </Row>
      </Container>
    </div>
  );
}

export const getStaticProps = async ({ locale }) => ({
  props: {
    ...(await serverSideTranslations(locale, ["common"])),
  },
});
