import React, { useContext } from "react";
import { cartContext } from "../../context/cartContext";
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCartShopping } from "@fortawesome/free-solid-svg-icons";

function CartWidget() {
  const miContext = useContext(cartContext);

  return (
    <div>
      <Link to="/cart">
        <FontAwesomeIcon icon={faCartShopping} color="#374B73" />
      </Link>
      <span style={{ color: "red" }}>{miContext.itemsInCart()}</span>
    </div>
  );
}

export default CartWidget;