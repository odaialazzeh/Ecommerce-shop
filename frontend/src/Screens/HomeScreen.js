import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import { Col, Container, Row } from "react-bootstrap";
import Product from "../components/Product";
import Message from "../components/Message";
import Loader from "../components/Loader";
import Paginate from "../components/Paginate";
import ProductCarousel from "../components/ProductCarousel";
import { listProducts } from "../actions/productActions";

const HomeScreen = () => {
  const dispatch = useDispatch();
  const { keyword } = useParams();
  const { pageNumber } = useParams() || 1;

  const productList = useSelector((state) => state.productList);
  const { Loading, error, products, page, pages } = productList;

  useEffect(() => {
    dispatch(listProducts(keyword, pageNumber));
  }, [dispatch, keyword, pageNumber]);

  return (
    <>
      {!keyword && <ProductCarousel />}
      <div className="home-container">
        <h1>latest Products</h1>
        {Loading ? (
          <Loader />
        ) : error ? (
          <Message variant="danger">{error}</Message>
        ) : (
          <>
            <Container>
              <Row className="home-row">
                {products.map((product) => (
                  <Col key={product._id} sm={12} md={6} lg={4}>
                    <Product product={product} />
                  </Col>
                ))}
              </Row>
            </Container>
            <Paginate
              pages={pages}
              page={page}
              keyword={keyword ? keyword : ""}
            />
          </>
        )}
      </div>
    </>
  );
};

export default HomeScreen;
