import React from "react";
import MyButton from "../MyButton/MyButton";
import ToggleButton from "../ToggleButton/ToggleButton";
import "./item.css";
import { Link } from "react-router-dom";

function Item({ title, imgurl, price, stock, id, discount }) {
  const urlDetail = `/detail/${id}`;
  const stylePrice = { color: discount && "red" };

  return (
    <div className="card">
      <ToggleButton icon="♥" />
      <div className="card-img">
        <img src={imgurl} alt={title} />
      </div>
      <div className="card_detail">
        <h3>{title}</h3>
        <h4 style={stylePrice} className="priceTag">
          $ {price}
        </h4>
        {discount && <small>Descuento: {discount}</small>}
        {stock <= 0 && <span>Sin stock</span>}
      </div>

      <Link to={urlDetail}>
        <MyButton
          onTouchButton={() => console.log("click")}
          colorBtn={stock <= 0 && "gray"}
        >
          Ver más
        </MyButton>
      </Link>
    </div>
  );
}

export default Item;
