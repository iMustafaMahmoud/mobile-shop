import React from "react";
import { connect } from "react-redux";
import { removeProductFromBasket } from "./components/actions/shopActions";
import { useDispatch, useSelector } from "react-redux";

export function Basket({ onRemove }) {
  const { products } = useSelector((state) => state.basket);
  let totalPrice = 0.0;
  products.forEach((product) => {
    totalPrice += product.quantity * product.price;
  });
  return (
    <div>
      <ul className="products">
        {products.map((product) => (
          <li key={product.id} id={`product-${product.id}`}>
            <span>Name: {product.name}</span>
            <span>Quantity: {product.quantity}</span>
            <button
              id={`remove-${product.id}`}
              onClick={() => onRemove(product.id)}
            >
              Remove
            </button>
          </li>
        ))}
      </ul>
      <div>
        Total price: <span id="total-price">{totalPrice}</span>
      </div>
    </div>
  );
}

function mapStateToProps(state) {
  return {};
}

function mapDispatchToProps(dispatch) {
  return {
    onRemove: (productId) => dispatch(removeProductFromBasket(productId)),
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(Basket);
