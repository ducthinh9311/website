import { useContext } from "react";
import { AppContext } from "../../components/AppContext";
import Header from "../../components/header/Header";
import Footer from "../../components/footer/Footer";
import SimpleSlider from "../slider/Slider";
import PauseOnHover from "../list/SliderList";
import NewArrival from "../list/NewArrival";
import "./Cart.css";
export default function Cart() {
  const {
    cart,
    handleAddProduct,
    handleRemoveProduct,
    handleCartClear,
    reduction,
    increase,
    total,
    setCart,
  } = useContext(AppContext);

  return (
    <>
      <Header />

      <div className="cart_background">
        <div className="cart_container">
          <div className="cart_col_1">
            <div className="cart-items">
              <h2 className="cart-items-header">Shopping Cart</h2>
              <div className="clear-cart">
                {cart.lengh >= 1 && (
                  <button className="clear-cart-btn">Remove All</button>
                )}
              </div>
              {cart.lengh === 0 && (
                <div className="cart-items-empty">No empty</div>
              )}
              <div>
                {cart.map((item, cartindex) => {
                  return (
                    <div className="container_shoppingcart">
                      <div ket={item._id} className="cart-container-image">
                        <img
                          className="cart-items-image"
                          src={item.img}
                          alt={item.id}
                        />
                      </div>
                      <div className="cart-items-title">{item.title}</div>
                      <div className="cart-items-quantity">
                        <button
                          className="cart-items-remove"
                          onClick={() => reduction(item.id)}
                        >
                          -
                        </button>
                        <span>{item.count}</span>
                        <button
                          className="cart-items-add"
                          onClick={() => increase(item.id)}
                        >
                          +
                        </button>
                        <div className="cart-items-price">${item.price}</div>
                      </div>
                    </div>
                  );
                })}
              </div>
            </div>
          </div>
          <div className="cart_col_2">
            <h2 className="cart-items-header sum">Summary</h2>
            <div className="cart-items-total-price-name">
              <div className="cart-items-total-price">
                Total: $ {total.toFixed(2)}
              </div>
              <button className="cart-checkout">CHECKOUT</button>
            </div>
          </div>
        </div>
      </div>
      <NewArrival />
      <Footer />
    </>
  );
}
