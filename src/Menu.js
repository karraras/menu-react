import React from "react";

const Menu = ({ id, title, price, img, desc }) => {
  return (
    <article className="menu-item" key={id}>
      <img alt="" src={img} className="photo" />
      <div className="item-info">
        <header>
          <h4>{title}</h4>
          <p className="price">{price}</p>
        </header>
        <p className="item-text">{desc}</p>
      </div>
    </article>
  );
};

export default Menu;
// .section-center {

// .menu-item {

// .photo {

// .item-info header {

// .item-info h4 {

// .price {

// .item-text {
