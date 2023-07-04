import React, { Component } from "react";
import Slider from "react-slick";
import product from "../../assett/images/product.png";
import product4 from "../../assett/images/product4.png";
import product2 from "../../assett/images/product2.png";
import product5 from "../../assett/images/product5.png";
import product3 from "../../assett/images/product3.png";
import product6 from "../../assett/images/product6.png";
import "./SliderList.css";
import { Link } from "react-router-dom";
export default class PauseOnHover extends Component {
  render() {
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
      <div className="slider_products">
        <h2 className="title">Products</h2>
        <Slider {...settings}>
          <div>
            <div className="btn_2"></div>
            <Link to="/apparel">
              <img src={product} alt="#" />
            </Link>
          </div>
          <div>
            <div className="btn_2"></div>
            <Link to="/canvas">
              <img src={product4} alt="#" />
            </Link>
          </div>
          <div>
            <div className="btn_2"></div>
            <Link to="/apparel">
              <img src={product2} alt="#" />
            </Link>
          </div>
          <div>
            <div className="btn_2"></div>
            <Link to="/canvas">
              <img src={product5} alt="#" />
            </Link>
          </div>
          <div>
            <div className="btn_2"></div>
            <Link to="/apparel">
              <img src={product3} alt="#" />
            </Link>
          </div>
          <div>
            <div className="btn_2"></div>
            <Link to="/canvas">
              <img src={product6} alt="#" />
            </Link>
          </div>
        </Slider>
      </div>
    );
  }
}
