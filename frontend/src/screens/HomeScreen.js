// eslint-disable-next-line no-unused-vars
import React, {useState, useEffect } from "react";
import {  Col, Row } from "react-bootstrap";
import Product from "../components/Product";
// import { Products } from '../product'
import axios from "axios";
const HomeScreen = () => {
  const [products, setProducts] = useState([]);
  const FetchProducts = async () => {
    const { data } = await axios.get("/api/products");
    setProducts(data);
    console.log("======>",data)
  };

    useEffect(() => {
      FetchProducts();
    }, []);
    console.log("products======",products)
  return (
    <Row>
      {products.map((product, index) => (
        <Col sm={12} md={6} lg={4} xl={3}>
          <Product product={product} />
        </Col>
      ))}
    </Row>
  );
};

export default HomeScreen;
