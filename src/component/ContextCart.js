import React, { useContext } from "react";
import { Scrollbar } from "react-scrollbars-custom";
import Item from "./Item";
import { creatingContextForCart } from "./Cart";

const ContextCart = () => {
  // const [item , setItem] = useState(products)
  const { item , clearCart } = useContext(creatingContextForCart);

if(item.length===0){
  return (
    <>
          <header>
        <div className="continue-shopping">
          <img className="arrow-icon" src="./images/arrow.png" alt="arrw" />
          <h3>continue shopping for your favourites</h3>
        </div>
        <div className="cart-icon">
          <img src="./images/cart.png" alt="cart" />
          <p>0</p>
        </div>
      </header>
      <section className="main-cart-section">
        <h1>Shopping cart</h1>
        <p className="total-items">
          You have <span className="total-items-count">0</span> items in your
          cart.
        </p>
        </section>
    </>
  )}
  return (
    <>
      <header>
        <div className="continue-shopping">
          <img className="arrow-icon" src="./images/arrow.png" alt="arrw" />
          <h3>continue shopping for your favourites</h3>
        </div>
        <div className="cart-icon">
          <img src="./images/cart.png" alt="cart" />
          <p>02</p>
        </div>
      </header>
      <section className="main-cart-section">
        <h1>Shopping cart</h1>
        <p className="total-items">
          You have <span className="total-items-count">7</span> items in your
          cart.
        </p>
        <div className="cart-items">
          <div className="cart-items-container">
            <Scrollbar>
              {item.map((currElem) => {
                return <Item key={currElem.id} {...currElem} />;
              })}
            </Scrollbar>
          </div>
        </div>
        <div className="card-total">
          <h3>
            Cart total: <span>132000rs</span>
          </h3>
          <button>Checkout</button>
          <button className="clear-cart" onClick={()=>clearCart()}>Clear cart</button>
        </div>
      </section>
    </>
  );
};

export default ContextCart;
