import React, { useEffect } from "react";
import { Link } from "react-router-dom";
import { Carousel, Image } from "react-bootstrap";
import { useDispatch, useSelector } from "react-redux";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import "./Home.css";
import Loader from "./Loader";
import Message from "./Message";
import { listTopProducts } from "../actions/productActions";

const ProductCarousel = () => {
  const dispatch = useDispatch();

  const productTopRated = useSelector((state) => state.productTopRated);
  const { loading, error, products } = productTopRated;

  useEffect(() => {
    dispatch(listTopProducts());
  }, [dispatch]);

  const settings = {
    dots: true,
    infinite: true,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    appendDots: (dots) => {
      return <ul style={{ margin: "0px" }}>{dots}</ul>;
    },
  };

  return loading ? (
    <Loader />
  ) : error ? (
    <Message variant="danger">{error}</Message>
  ) : (
    <section className="homeSlide">
      <Slider {...settings}>
        {products.map((product) => (
          <div className="slide-container" key={product._id}>
            <div className="content-container">
              <div className="image-container">
                <Link to={`/product/${product._id}`}>
                  <Image src={product.image} alt={product.name} fluid />
                </Link>
              </div>

              <div className="description-container">
                <h3>{product.name}</h3>
                <p>${product.price}</p>
                <p style={{ marginBottom: "5rem" }}>{product.description}</p>
              </div>
            </div>
          </div>
        ))}
      </Slider>
    </section>
  );
};

export default ProductCarousel;
