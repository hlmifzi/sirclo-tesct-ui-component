import React from 'react';
import PropTypes from 'prop-types';
import './card.scss';

const Interfaces = {
  product: PropTypes.arrayOf({}),
  discount: PropTypes.number
}

const defaultProps = {
  product: {
    imgUrl: 'https://files.sirclocdn.xyz/frontend-test-37/images/women-product-3.jpg',
    url: 'https://www.linkedin.com/in/helmi-fauzi-12b872143/',
    category: 'ACCESSORIES',
    name: 'Product Name Display',
    price: 'IDR 250,000',
  }
  ,
  discount: 20
};

export const Card = ({ product, discount, ...rest }) => (
  <div className="card">
    <div className="card__image">
      <img src={product.imgUrl} />
      {
        discount &&
        <>
          <div className="badge__diskon">
            <p>
              OFF<br />{discount}%
            </p>
            <div className="triangle"></div>
          </div>
        </>
      }

    </div>
    <div className="slicker__paragraph">
      <div className="product__category__card">{product.category}</div>
      <div className="product_desc">{product.name}</div>
      <div className="product_desc">{product.price}</div>
    </div>
  </div>
);

Card.propTypes = Interfaces
Card.defaultProps = defaultProps
