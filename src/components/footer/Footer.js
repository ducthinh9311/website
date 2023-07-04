import React from "react";
import { Link } from "react-router-dom";
import "./Footer.css";
import mastercard from "../../assett/images/mastercard.jpg";
import paypal from "../../assett/images/paypal.jpg";
import visa from "../../assett/images/visa.jpg";
export default function Footer() {
  return (
    <div className="footer_coppyright">
      <div className="footer_container">
        <div className="footer_col">
          <div className="footer_title">
            <h5>COMPANY</h5>
          </div>
          <Link to="/contact">Contact Us</Link>
          <br />

          <p>
            Vietnamese: <br />
            197 Duong 11, Phuoc Binh, TP Thu Duc
          </p>
        </div>
        <div className="footer_col">
          <div className="footer_title">
            <h5>SHOP</h5>
          </div>
          <Link>Home</Link>
          <Link>Products</Link>
          <Link>Recipients</Link>
          <Link>Occasions</Link>
          <br />
          <br />
        </div>
        <div className="footer_col">
          <div className="footer_title">
            <h5>MORE INFO</h5>
          </div>
          <p>Rycustomgift - Personalized gifts for your family</p>
          <p>
            Email: customer@rycustomgift.com <br />
            Support Time: Mon - Sat: 9AM-5PM EST
            <br />
            Phone: 0772-772-394
          </p>
        </div>
      </div>
      <div className="footer__bottom">
        <h6>© 2023 Rycustomgift</h6>
        <div className="footer_iconsbank">
          <img src={mastercard} />
          <img src={paypal} />
          <img src={visa} />
        </div>
      </div>
    </div>
  );
}
