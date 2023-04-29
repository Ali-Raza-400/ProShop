// eslint-disable-next-line no-unused-vars
import React, { useState, useEffect } from "react";
import { Button, Col, Form, Row } from "react-bootstrap";
import Product from "../components/Product";
import { useDispatch, useSelector } from "react-redux";
// import { Products } from '../product'
import { listProducts } from "../actions/productAction";
import Loader from "../components/Loader";
import Message from "../components/Message";
import { useHistory } from "react-router-dom";
const HomeScreen = ({match}) => {
  const history=useHistory()
  const [keyword,setKeyword]=useState("")
  const onSubmitHandler=(e)=>{
    e.preventDefault()
    console.log("value",keyword)
    if(keyword.trim()){
      history.push(`/search/${keyword}`)
    }else{
      history.push('/')
    } 
  }
  console.log("match",match.params)
  // const history=useHistory()
  console.log("history===>",history.location.pathname.split("/")[2])
// const keyword=  history.location.pathname.split("/")[2]
  const dispatch = useDispatch();
  const productList = useSelector((state) => state.productList);
  const { loading, error, products } = productList;
  useEffect(() => {
    dispatch(listProducts(keyword));
  }, [dispatch,keyword]);
  return (
    <>
      {loading ? (
        <Loader />
      ) : error ? (
        <Message variant="danger" >{error}</Message>
      ) : (
        <Row>
          {products.map((product, index) => (
            <Col sm={12} md={6} lg={4} xl={3}>
              <Product product={product} />
            </Col>
          ))}
          <>
          <Form className="d-flex" onClick={onSubmitHandler}>
            <Form.Control
              type="search"
              placeholder="Search"
              className="me-2"
              aria-label="Search"
              // value={keyword}
              onChange={(e)=>setKeyword(e.target.value)}
            />
            <Button type='submit' variant="outline-success" >Search</Button>
          </Form></>
        </Row>
      )}
    </>
  );
};

export default HomeScreen;
