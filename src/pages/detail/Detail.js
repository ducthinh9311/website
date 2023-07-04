import { useParams } from "react-router-dom";
import { ProductList } from "../data/ProductList";
import { FaFacebookF, FaInstagram, FaCartPlus } from "react-icons/fa";
import { useContext, useState } from "react";
import { AppContext } from "../../components/AppContext";
import Header from "../../components/header/Header";
import Footer from "../../components/footer/Footer";
import "./Detail.css";
import React, { Component } from "react";
import Slider from "react-slick";
import product from "../../assett/images/product.png";
import product4 from "../../assett/images/product4.png";
import product2 from "../../assett/images/product2.png";
import product5 from "../../assett/images/product5.png";
import product3 from "../../assett/images/product3.png";
import product6 from "../../assett/images/product6.png";
import Review from "../list/review/Review";
import { Link } from "react-router-dom";
export default function Detail() {
  const { id } = useParams();
  const { handleAddProduct } = useContext(AppContext);
  const detail = ProductList.filter((product, index) => {
    return product.id === id;
  });
  console.log(detail);
  const [quantity, setQuantity] = useState(1);
  const increment = () => {
    setQuantity((prev) => prev + 1);
  };

  const decrement = () => {
    setQuantity((prev) => {
      if (prev === 1) return 1;
      return prev - 1;
    });
  };
  // render();
  var settings = {
    dots: false,
    infinite: true,
    slidesToShow: 3,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 2000,
    pauseOnHover: true,
  };
  return (
    <div>
      <Header />
      {detail.map((product) => (
        <div className="single-product-main-content" key={product.id}>
          <div className="layout">
            <div className="single-product-page">
              <div className="left">
                <img src={product.img} alt="" />
              </div>
              <div className="right">
                <span className="name">{product.title}</span>
                <br></br>
                <span className="price">$ {product.price}</span>
                <br></br>
                <span className="sku">SKU: {product.sku}</span>
                <br></br>
                <br></br>
                <div className="size_title">
                  Size:
                  <span className="size"> {product.size}</span>
                  <span className="size"> {product.size1}</span>
                  <span className="size"> {product.size2}</span>
                  <span className="size"> {product.size3}</span>
                  <span className="size"> {product.size4}</span>
                  <span className="size"> {product.size5}</span>
                </div>
                <br></br>
                <span className="desc">
                  Description
                  <hr></hr>
                  {product.content}
                </span>
                <br></br>
                <br></br>
                <span className="desc">{product.content1}</span>
                <br></br>
                <span className="desc">{product.content2}</span>
                <br></br>
                <span className="desc">{product.content3}</span>
                <br></br>
                <span className="desc">{product.content4}</span>
                <br></br>

                <div className="cart-buttons">
                  <h6 className="quantity-title">Quantity:</h6>
                  <div className="quantity-buttons">
                    <span className="quantity_buttons_1" onClick={decrement}>
                      -
                    </span>
                    <span>{quantity}</span>
                    <span className="quantity_buttons_1" onClick={increment}>
                      +
                    </span>
                  </div>
                  <br></br>
                  <div
                    className="add-to-cart-button"
                    onClick={() => handleAddProduct(product.id)}
                  >
                    {/* <FaCartPlus size={20} /> */}
                    <p className="addtocart"> ADD TO CART</p>
                  </div>
                </div>
                <br></br>
                <hr></hr>
                <span className="divider" />
                <div className="info-item">
                  <span className="text-bold">
                    Category:
                    <span> {product.title1}</span>
                  </span>
                  <br></br>

                  <span className="text-bold">
                    Share:
                    <span className="social-icons">
                      <FaFacebookF size={16} />
                      <FaInstagram size={16} />
                    </span>
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>
      ))}
      <div className="slider_products">
        <h2 className="title_moreitems">MORE ITEMS TO CONSIDER</h2>
        <Slider {...settings}>
          <div>
            <div className="btn_2"></div>
            <Link to="/bestsellers">
              <img src={product} alt="#" />
            </Link>
          </div>
          <div>
            <div className="btn_2"></div>
            <Link to="/bestsellers">
              <img src={product4} alt="#" />
            </Link>
          </div>
          <div>
            <div className="btn_2"></div>
            <Link to="/bestsellers">
              <img src={product2} alt="#" />
            </Link>
          </div>
          <div>
            <div className="btn_2"></div>
            <Link to="/bestsellers">
              <img src={product5} alt="#" />
            </Link>
          </div>
          <div>
            <div className="btn_2"></div>
            <Link to="/bestsellers">
              <img src={product3} alt="#" />
            </Link>
          </div>
          <div>
            <div className="btn_2"></div>
            <Link to="/bestsellers">
              <img src={product6} alt="#" />
            </Link>
          </div>
        </Slider>
      </div>
      <Review />
      <Footer />
    </div>
  );
}
